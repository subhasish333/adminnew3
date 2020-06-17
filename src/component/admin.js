
import React, { useState, useEffect} from 'react'
import host from './api';
import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import UserWrapper from './UserWrapper';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        margin: theme.spacing(0),
        display: "flex",
        flexWrap: "wrap",
    },
    top:{
        fontSize: "3em",
        fontWeight: "bold",
        
    },
    leftSide: {
        flex: 2,
        height: "100%",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    rightSide: {
        flex: 1,
        height: "100%",
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    paper: {
        height: "100%",
        margin: theme.spacing(0),
        padding: theme.spacing(2),
    },
    grid: {
        margin: theme.spacing(1),
    },
    h2: {
        color: 'black',
        fontSize: "2em",
    },
}));

const Admin = props => {
    const classes = useStyles();
    function handleSearch() {
        setDisabled(true);
    };
    let currentUser = JSON.parse(localStorage.getItem("user"));
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': currentUser.token ? `Bearer${currentUser.token}` : ''
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${host}/get/user/profile/` + currentUser.user.aadhaar,
            headers: headers
        })
        .then(response => {
            console.log(response.data);
            updateAdmin([...admin, response.data]);
        })
        .catch(error => {
            console.log(error);
        })
    }, // eslint-disable-next-line
     []);

    const handleSubmit = (values, { setSubmitting }) => {
        //Submit to Server
        console.log(values);
        setDisabled(true);
        setSubmitting(false);
        
    }
    const [disabled, setDisabled] = useState(true);
    const [admin, updateAdmin] = useState([]);

    console.log("Admin :",admin[0] ? admin[0].Name : '');
    return (
        <Formik
            initialValues={
                {
                    name: admin[0] ? (admin[0]).Name : '' ,
                    sex: "Male",                    
                    occupation: "Student",
                    age: "22",
                    marital: "Unmarried"
                }
            }
            onSubmit={handleSubmit}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .required("Name is required"),
                sex: Yup.string()
                    .required("This field is required"),
                occupation: Yup.string()
                    .required("This field is required"),
                age: Yup.string()
                    .required("This field is required"),
                marital: Yup.string()
                    .required("This field is required")
            })}
        >
            {props => {
                const {
                    values,
                    handleChange,
                    handleBlur,
                    touched,
                    errors,
                    isSubmitting,
                    handleSubmit
                } = props;
                return (
                    <UserWrapper>
                        <div className={classes.root}>
                        <div className={classes.top}>
                        <Grid 
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                          
                        >
                        
                        ADMIN PORTAL
                        </Grid>
                        </div>
                        <Grid item xs>
                        <TextField placeholder="Enter Aadhar Number" variant="outlined"  fullWidth />
                        </Grid>
                                            <Grid container spacing={2} alignItems="center" justify="flex-end">
                                                <Grid item ><Button variant="outlined" onClick={handleSearch}><SearchIcon color="action" />Search</Button></Grid>
                                            </Grid>
                            <div className={classes.container}>
                            
                                <div className={classes.leftSide}>
                                <h2 className={classes.h2}>Results: </h2>
                                    <form onSubmit={handleSubmit}>
                                        <Paper className={classes.paper}>
                                            
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item xs={4}>
                                                    Name :
                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                        id="name"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder="Name"
                                                        variant="outlined"
                                                        helperText={touched.name ? errors.name : ""}
                                                        error={touched.name && Boolean(errors.name)}
                                                        disabled={disabled}
                                                        fullWidth />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item xs={4}>
                                                    Gender :
                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                        id="sex"
                                                        value={values.sex}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder="Gender"
                                                        variant="outlined"
                                                        helperText={touched.sex ? errors.sex : ""}
                                                        error={touched.sex && Boolean(errors.sex)}
                                                        disabled={disabled}
                                                        fullWidth />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item xs={4}>
                                                    Occupation:
                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                        id="occupation"
                                                        value={values.occupation}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder="Occupation"
                                                        variant="outlined"
                                                        helperText={touched.occupation ? errors.occupation : ""}
                                                        error={touched.occupation && Boolean(errors.occupation)}
                                                        disabled={disabled}
                                                        fullWidth />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item xs={4}>
                                                    Age :
                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                        id="age"
                                                        value={values.age}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder="Age"
                                                        variant="outlined"
                                                        helperText={touched.age ? errors.age : ""}
                                                        error={touched.age && Boolean(errors.age)}
                                                        disabled={disabled}
                                                        fullWidth />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item xs={4}>
                                                    Marital Status :
                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                        id="marital"
                                                        value={values.marital}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder="Marital Status"
                                                        variant="outlined"
                                                        helperText={touched.marital ? errors.marital : ""}
                                                        error={touched.marital && Boolean(errors.marital)}
                                                        disabled={disabled}
                                                        fullWidth />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={4}>
                                   Family Members :
                            </Grid>
                                <Grid item xs>
                                    <TextField placeholder="Memeber 1" variant="outlined" disabled={disabled} fullWidth />
                                </Grid>
                                <Grid item xs>
                                    <TextField placeholder="Memeber 2" variant="outlined" disabled={disabled} fullWidth />
                                </Grid>
                            </Grid>
                                            
                                        </Paper>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </UserWrapper>
                )
            }}
        </Formik>
    )
}

export default withRouter(Admin);