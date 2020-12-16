import {GET_POSTS,GET_POST,POST_ERROR,UPDATE_LIKES,DELETE_POST,ADD_POST,ADD_COMMENT,REMOVE_COMMENT} from "../actions/types"


//initial state of posts

const initialState = {

    posts: [],
    post: null,
    loading: true,
    error: {}
}


//action stores the type and payload
export default function(state = initialState, action){

    //destructure type and payload from action

    const {type,payload} = action;

    switch(type){

        case GET_POSTS: 

        return {

            ...state,
            posts: payload,
            loading: false,
        };


        case GET_POST:
            
        return {

            ...state,
            post: payload,
            loading: false
        }


        case UPDATE_LIKES:

            return{

                ...state,
                posts: state.posts.map((post)=> post._id === payload.id ? {...post, likes: payload.likes } : post),
                loading: false

            }
            
        case DELETE_POST:

        return {

            ...state,
            posts: state.posts.filter((post)=> post._id !== payload),
            loading: false
        }



        case ADD_COMMENT:

            return{

                ...state,
                post: {...state.post, comments: payload},
                loading: false
            }


        case REMOVE_COMMENT:{

            return{

                ...state,
                post: {

                    ...state.post,
                    comments: state.post.comments.filter(comment=>comment._id !== payload)
                },
                loading: false
               

            }
        }
  
        

        case POST_ERROR:
           
        return {

            ...state,
            erorr: payload,
            loading: false
        }


        case ADD_POST: {

            return{

                ...state,
                // return to post a copy of the current array with payload added.
                posts:  [payload, ...state.posts],
                loading: false
            }
        }

        default:
            return state;
    }



}