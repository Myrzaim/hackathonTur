import React from 'react';
import { createContext, useReducer } from 'react';
import axios from 'axios';
import { useLocation, useNavigate} from 'react-router-dom';

export const turContext = createContext(); // облако
const API = "http://localhost:8000/turs";
const ORDERAPI = "http://localhost:8000/orders";


const INIT_STATE = {
    turs: null,
    tursDetails: null,
    pageTotalCount: 1,
  };
  
  function reducer(prevState, action) {
    switch (action.type) {
      case "GET_PRODUCT":
        return {
          ...prevState,
          turs: action.payload.data,
          pageTotalCount: Math.ceil(action.payload.headers["x-total-count"]/3),
            };
        case "GET_ONE_PRODUCT":
        return { ...prevState, tursDetails: action.payload };
      default:
        return prevState;
    }
  }

const TurContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const location = useLocation();
    const navigate = useNavigate();
  

      
    // AddTur   create
    async function addTur(obj) {
        try {
            await axios.post(API, obj);
            navigate("/list");
        }
        catch (error) {
            console.log(error);
            return;
        }
  }
  async function addOrders(obj) {
    try {
        await axios.post(ORDERAPI, obj);
    }
    catch (error) {
        console.log(error);
        return;
    }
}

    // function setDetailNull() {
        // state.tursDetails = null;
    //     dispatch({
    //         type: "GET_ONE_PRODUCT",
    //         payload: null,
    //   });
    // }

    // ReadTur  read
  async function readTur() {
        const res = await axios(`${API}${location.search}`);
        dispatch({
          type: "GET_PRODUCT",
          payload: res,
    });
    };

    // DeleteTur  delete
    async function deleteTur(id) {
        try {
          await axios.delete(`${API}/${id}`);
            readTur();
          navigate("/list");
        } catch (error) {
          return error;
        };
    };

    // readOneTur
    async function readOneTur(id) {
        const { data } = await axios(`${API}/${id}`);
        dispatch({
          type: "GET_ONE_PRODUCT",
          payload: data,
        });
    }


    //EditTur Update
    async function editTur(id, editedObj) {
        await axios.patch(`${API}/${id}`, editedObj);
        readTur();
      }


    let cloud = {
        addTur,
        readTur,
        readOneTur,
        tursArr: state.turs,
        deleteTur,
        editTur,
      tursDetails: state.tursDetails,
      pageTotalCount: state.pageTotalCount,
      addOrders
    }
    return (
        <turContext.Provider value={cloud}>
          {props.children}
        </turContext.Provider>
      );
    };

export default TurContextProvider;