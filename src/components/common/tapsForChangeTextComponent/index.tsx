import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import { TapsComponentProps } from './types'
import { useAppDispatch } from '../../../redux/hooke'
import { StyledTextarea } from '../../../commonStyles'
import { getValue, isEmptyObject } from '../../../utils/objectUtils'

const TapsForChangeTextComponent = ({ tabDataForMap, handleChangeProjectData, dataForChange, forCreateFlag = false }: TapsComponentProps) => {
    const [value, setValue] = useState<string>(tabDataForMap[0].value);
    const dispatch = useAppDispatch()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            {!isEmptyObject(dataForChange) &&
                <>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="secondary tabs example"
                    >
                        {tabDataForMap.map((tab) => {
                            return (
                                <Tab value={tab.value} label={tab.label} key={tab.label} />
                            )
                        })}
                    </Tabs>

                    <StyledTextarea
                        sx={{ mb: 5, mt: 2 }}
                        value={getValue(value, dataForChange)}
                        onChange={(event) => dispatch(handleChangeProjectData({ key: value, text: event.target.value, forCreateFlag }))}
                    />
                </>
            }
        </>
    )
}

export default TapsForChangeTextComponent
