/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "./Grid/GridItem.js";
import  Section  from './organisms/Section/Section';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SubCategoryForm from './SubCategoryForm';
import {
  Grid,
  Button,
} from "@material-ui/core";

const SubCategoryCreate = ({ history, location,match }) => {
  
  const useStyles = makeStyles(theme => ({
    formContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      maxWidth: 500,
      margin: `0 auto`,
      
    },
    section: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <GridItem xs={12}>
          <Button
          variant="contained"
          color="primary"
          style={{marginTop:"1rem",marginBottom:"1rem"}}
          startIcon={<ArrowBackIosIcon />}
          >
          </Button>
        </GridItem>
      </Grid>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
        <SubCategoryForm location={location} history={history}/> 
        </div>
      </Section>
    </div>
  )
       

}

export default SubCategoryCreate;
