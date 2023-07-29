import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppleWalletPass from "./AppleWalletPass";
import GoogleWalletPass from "./GoogleWalletPass";
import AppleCard from "./AppleCard";
import GoogleCard from "./GoogleCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const WalletPasses = () => {
  const [value, setValue] = React.useState(0);
  // console.log(value)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div>
        <h2 className="text-2xl border-b-2 pb-4">Wallet Passes</h2>
        <p className="my-4">Modify your Apple wallet pass design.</p>
      </div>
      <div>
      <Box sx={{ width: '50%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="w-1/2" label="Apple Wallet Pass" {...a11yProps(0)} />
          <Tab className="w-1/2" label="Google Wallet Pass" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      {/* <AppleWalletPass/> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <GoogleWalletPass/>
      </CustomTabPanel>
    </Box>
      </div>
      {/* fixed card */}
      <div className="fixed right-0 top-48">
        {
          value === 0 ?<AppleCard/>:<GoogleCard/>
        }
      </div>
    </>
  );
};

export default WalletPasses;
