import React from 'react';
import Button from '@material-ui/core/Button';
import ReviewText from "./ReviewText";
 
const NewReviewForm: React.FC = () => {
    return (  
        <>
            <p>
                レビューを投稿する
            </p>
            <ReviewText />
            <Button variant="contained" color="secondary">
                投稿する
            </Button>
        </>
    );
}
 
export default NewReviewForm;