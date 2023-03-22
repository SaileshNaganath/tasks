import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const App = () => {
const [value, setValue] = React.useState(2);

return (
	<div style={{marginLeft: "40%"}}>
	<h2>Experience</h2>
	<Paper square>
		<Tabs
		value={value}
		textColor="primary"
		indicatorColor="primary"
		onChange={(event, newValue) => {
			setValue(newValue);
		}}
		>
		<Tab label="Active TAB One" />
		<Tab label="Active TAB Two" />
		<Tab label="Disabled TAB!" disabled />
		<Tab label="Active Tab Three" />
		</Tabs>
		<h3>TAB NO: {value} clicked!</h3>
	</Paper>
	</div>
);
};

export default App;
