import React from 'react'
import { ResponsiveStream } from '@nivo/stream'
import { patternDotsDef } from '@nivo/core'
import { generateCountriesData } from '@nivo/generators'

const Stream = (props) => (
    <div className="graphBox">
        <ResponsiveStream
            margin={{
                top: 10,
                right: 15,
                bottom: 1.5,
                left: 1.5,
            }}
            data={props.streamData}
            keys={['swim', 'hike', 'gym']}
            offsetType="none"
            colors={['#96ceb4', '#ffeead', '#ff6f69']}
            enableGridX={false}
            enableGridY={false}
            axisBottom={null}
            isInteractive={true}
            animate={false}
            borderWidth={0}
            borderColor="#000000"
            defs={[patternDotsDef('pattern')]}
        />
        <div className="Title">STREAM</div>
    </div>
)

export default Stream
