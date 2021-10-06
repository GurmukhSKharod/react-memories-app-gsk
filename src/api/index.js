import axios from 'axios';

const url = 'https://react-memories-app-gsk.herokuapp.com/posts'; //from server side of project

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

/* to add UPDATE fyunctionality steps:
1. router.patch('/:id', updatePost); -->  "routes/posts.js"
2. export const updatePost function --> "controllers/posts.js
3. useState hook for currentId --> "client/App.js"
4. Props drilling - bring state peices down to App.js children in props. (Posts.js, Form.js, Post.js) 
5. In Form.js, use if statement for update or create post.
6. In Post.js, add update option to MoreHorizIcon.
7. Create action for UPDATE --> "actions/posts.js".
7~5. Each action has a "payload", accessed in other files.(reducers)
8. Add this line shown below in api. --> "api/index.js"
9. Add code to reducers for UPDATE --> "reducers/posts.js"
10. Add useSelector from react-redux to Form.js --> "Form/Form.js"
11. Add useEffect to update form with current post with selectedID
12. {currentId ? "Editing" : "Creating"} A Memory --> "Form/Form.js"
13. Implement clear function to complete update --> "Form/Form.js"
*/
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);