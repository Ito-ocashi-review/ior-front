import React from 'react';
import Button from '@material-ui/core/Button';
import SweetsDropDown from './SweetsDropDown';
import ReviewText from "./ReviewText";
 
const NewReviewForm: React.FC = () => {
    return (  
        <>
            <p>
                レビューを投稿する
            </p>
            <SweetsDropDown />
            <ReviewText />
            <Button variant="contained" color="secondary" fullWidth={true}>
                投稿する
            </Button>
        </>
    );
}
 
export default NewReviewForm;