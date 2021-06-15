import React from "react";
// react component plugin for creating a beautiful datetime dropdown picker
// react component plugin for creating beatiful tags on an input

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";

const useStyles = makeStyles(styles);

export default function ExtendedForms() {
  const [checkedA, setCheckedA] = React.useState(true);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <br />
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.block}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={checkedA}
                          onChange={(event) =>
                            setCheckedA(event.target.checked)
                          }
                          value="checkedA"
                          classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            thumb: classes.switchIcon,
                            track: classes.switchBar,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                      }}
                      label="Toggle is on"
                    />
                  </div>
                </GridItem>
              </GridContainer>
              <br />
              <br />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
