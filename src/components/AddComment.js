/**
 * Created by kadoufall on 2017/4/22.
 */
import React from 'react';

const AddComment = ({comment}) => {
    let nickname;
    let content;

    return (
        <div className="addComment">
            <hr/>
            <div>

                <h4 className="text-info"><span className="glyphicon glyphicon-pencil" aria-hidden="true" />Add a comment</h4>
            </div>

            <form className="form-horizontal" onSubmit={e => {
                e.preventDefault();
                comment(nickname.value, content.value);
                nickname.value = '';
                content.value = '';
            }}>
                <div className="form-group">
                    <label htmlFor="nickname" className="col-sm-2 control-label">Nickname</label>
                    <div className="col-sm-9">
                        <input ref={node => nickname = node} type="text" className="form-control" id="nickname"
                               placeholder="请输入昵称" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="col-sm-2 control-label">Content</label>
                    <div className="col-sm-9">
                        <input ref={node => content = node} type="text" className="form-control" id="content"
                               placeholder="请输入评论内容" required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-9">
                        <button type="submit" className="btn btn-default" style={{float: 'left'}}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddComment;


