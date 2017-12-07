/**
 * Created by kadoufall on 2017/4/22.
 */
import React from 'react'
import {PropTypes} from 'prop-types'
import './CommentList.css';

const CommentList = ({comments}) => {
    if (comments.length) {
        return <ul className="list-unstyled commentList">
            {comments.map(comment =>
                <li key={comment.id}>
                    <div>
                        <div className="commentNickname">
                            <span>{comment.id}楼</span>
                            <span className="glyphicon glyphicon-user" aria-hidden="true" />
                            <span className="text-muted">{comment.nickname}</span>
                        </div>
                        <p className="commentContenr bg-info">{comment.content}</p>
                        <div className="commentTime">
                            <span className="glyphicon glyphicon-time" aria-hidden="true" />
                            <span className=" text-muted">{comment.time}</span>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    }else{
        return <h3 className="text-muted">There is no comment!</h3>
    }
};

CommentList.prototype = {
    nickname: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default CommentList;
