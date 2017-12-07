/**
 * Created by kadoufall on 2017/4/22.
 */
import {connect} from 'react-redux'
import Comment from '../components/CommentList';

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
    }
};


const VisibleCommentList = connect(
    mapStateToProps,
    null
)(Comment);

export default VisibleCommentList;