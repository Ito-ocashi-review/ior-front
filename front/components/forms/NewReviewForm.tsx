import React from 'react';
import Button from '@material-ui/core/Button';
import SweetsDropDown from './SweetsDropDown';
import ReviewText from "./ReviewText";
import EvaluationForm from "./EvaluetionForm"

type Props ={
  sweets: Array<string>,
}
 
const NewReviewForm: React.FC<Props> = ({sweets}) => {
  return (  
    <>
      <p>
        新しいレビューを登録する
      </p>
      <SweetsDropDown sweets={sweets}/>
      <ReviewText />
      <EvaluationForm />
      <Button variant="contained" color="secondary" fullWidth={true}>
        投稿する
      </Button>
    </>
  );
}
 
export default NewReviewForm;