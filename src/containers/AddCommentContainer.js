/**
 * Created by kadoufall on 2017/4/22.
 */
import {connect} from 'react-redux'
import {addComment} from '../actions';
import AddComment from '../components/AddComment';

const mapDispatchToProps = (dispatch) => {
    return {
        comment: (nickname,content) => {
            dispatch(addComment(nickname,content))
        }
    }
};


const AddCommentContainer = connect(
    null,
    mapDispatchToProps
)(AddComment);

export default AddCommentContainer;