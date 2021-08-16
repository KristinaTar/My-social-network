import React from "react";
import {render, screen} from "@testing-library/react";
import App from "../../App";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postInfo: [
        {id: 1, message: "Hello, dear Friends!", LikesCount: 100},
        {id: 2, message: "Working hard", LikesCount: 260},
        {id: 3, message: "Working hard", LikesCount: 260}
    ]
};

it('length should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("Good evening!");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postInfo.length).toBe(4);
    expect(newState.postInfo[3].message).toBe("Good evening!");


});

it('length after deleting should be decrement', () => {
    //1. test data
    let action = deletePost(3);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postInfo.length).toBe(2);



});
