import React, {useRef, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import './styles/styles.scss';

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Success from "./components/Success";

import {useData} from "./context/DataContext";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));


export default function HorizontalLabelPositionBelowStepper() {
    const childRef = useRef();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const {setValues, data} = useData();

    const [checked, setChecked] = useState(0);
    const [checkedSubgenre, setCheckedSubgenre] = useState(0);
    const [isDescriptionRequired, setIsDescriptionRequired] = useState(false);
    const [isNewSubgenre, setIsNewSubgenre] = useState(false);

    const onSubmit = data => {
        console.log(data);
        setValues(data);
        handleNext()
    };

    const resetChecked = () => {
        setChecked(0);
        setCheckedSubgenre(0)
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        console.log(data);
        setValues(data);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getSteps = () => {
        return isNewSubgenre ? ['Genre', 'Subgenre', 'New subgenre', 'Information', 'Success'] : ['Genre', 'Subgenre', 'Information', 'Success']
    };

    const steps = getSteps();

    const getStepContent = (stepIndex) => {
        if (stepIndex === 0) {
            return <Step1
                onSubmit={onSubmit}
                checked={checked}
                setChecked={setChecked}
                activeStep={activeStep}
                ref={childRef}
                handleNext={handleNext}
                handleBack={handleBack}/>;
        } else if (stepIndex === 1) {
            return <Step2
                checkedSubgenre={checkedSubgenre}
                setCheckedSubgenre={setCheckedSubgenre}
                handleNext={handleNext}
                handleBack={handleBack}
                getSteps={getSteps}
                isNewSubgenre={isNewSubgenre} setIsNewSubgenre={setIsNewSubgenre}
                isDescriptionRequired={isDescriptionRequired}
                setIsDescriptionRequired={setIsDescriptionRequired}/>;
        } else if (stepIndex === 2) {
            if (isNewSubgenre === true) {
                return <Step3 handleBack={handleBack} handleNext={handleNext} checkedSubgenre={checkedSubgenre}/>;
            } else {
                return <Step4
                    isDescriptionRequired={isDescriptionRequired}
                    activeStep={activeStep}
                    handleNext={handleNext}
                    handleBack={handleBack}/>;
            }
        } else if (stepIndex === 3) {
            if (isNewSubgenre === true) {
                return <Step4
                    isDescriptionRequired={isDescriptionRequired}
                    activeStep={activeStep}
                    handleNext={handleNext}
                    handleBack={handleBack}/>;
            } else {
                return <Success
                    setIsNewSubgenre={setIsNewSubgenre}
                    handleReset={handleReset}
                    resetChecked={resetChecked}/>;
            }
        } else if (stepIndex === 4) {
            return <Success
                setIsNewSubgenre={setIsNewSubgenre}
                handleReset={handleReset}
                resetChecked={resetChecked}/>;
        } else {
            return 'Unknown stepIndex';
        }

    };

    return (
        <div className="main">
            <div className='container'>
                <h4>Add book - New book</h4>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                            </div>
                        ) : (
                            <div>
                                <div className={classes.instructions}>{getStepContent(activeStep)}</div>

                                {/*<div>*/}
                                {/*    <Button*/}
                                {/*        disabled={activeStep === 0}*/}
                                {/*        onClick={handleBack}*/}
                                {/*        className={classes.backButton}*/}
                                {/*    >*/}
                                {/*        Back*/}
                                {/*    </Button>*/}
                                {/*    <Button variant="contained" color="primary" onClick={() => {*/}
                                {/*        childRef.current.onSubmitt();*/}
                                {/*        handleNext();*/}
                                {/*    }}>*/}
                                {/*        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}*/}
                                {/*    </Button>*/}
                                {/*</div>*/}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
