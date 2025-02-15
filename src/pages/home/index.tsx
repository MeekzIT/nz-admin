import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { homePageMenuTabs } from "./constants"
import HomePage from "../../components/homeComponents"

const Home = () => {
  const [value, setValue] = useState<string>(homePageMenuTabs[0].label);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        {homePageMenuTabs.map((tab) => {
          return (
            <Tab value={tab.value} label={tab.label} key={tab.label} />
          )
        })}
      </Tabs>
      <HomePage pageName={value} />
    </Box>
  )
}

export default Home
