import React from 'react';
import Button from '@material-ui/core/Button';
 
const NewReviewForm: React.FC = () => {
    return (  
        <>
            <p>
                レビューを投稿する
            </p>
            <Button variant="contained" color="secondary">
                投稿する
            </Button>
        </>
    );
}
 
export default NewReviewForm;