import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src=""></Avatar>
                    <input type="text" placeholder="What's on your mind?" />
                    {/* <input type="text" placeholder="Enter image URL" /> */}
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;