import React from 'react'
import { ResponsiveStream } from '@nivo/stream'
import { patternDotsDef } from '@nivo/core'
import { generateCountriesData } from '@nivo/generators'

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f']

const Stream = (props) => (
    <div className="graphBox">
        <ResponsiveStream
            margin={{
                "top": 10,
                "right": 15,
                "bottom": 1.5,
                "left": 1.5,
            }}
            data={props.streamData}
            keys={["swim", "hike", "gym", "run", "cycle", "other"]}
            axisLeft={{
                "orient": "left",
                "tickSize": 15,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "",
                "legendOffset": -40
            }}
            offsetType="none"
            colors={colors}
            enableGridX={false}
            enableGridY={true}
            axisBottom={null}
            isInteractive={true}
            animate={false}
            borderWidth={0}
            borderColor="#000000"
            defs={[patternDotsDef('pattern')]}
        />
    </div>
)

export default Stream
