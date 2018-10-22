import React from 'react'
import { ResponsiveStream } from '@nivo/stream'
import { patternDotsDef } from '@nivo/core'
import { generateCountriesData } from '@nivo/generators'
import "./index.css"
//import { colors } from '../../constants'

const Stream = () => (
    <div className="stream-graph">
        <ResponsiveStream
            margin={{
                top: 10,
                right: 15,
                bottom: 1.5,
                left: 1.5,
            }}
            data={generateCountriesData(
                ['rock', 'jazz', 'hip-hop', 'reggae', 'folk', 'soul', 'funk'],
                { size: 7 }
            )}
            keys={['rock', 'jazz', 'hip-hop', 'reggae', 'folk', 'soul', 'funk']}
            offsetType="none"
            colors={['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f']}
            enableGridX={false}
            enableGridY={false}
            axisBottom={null}
            isInteractive={false}
            animate={false}
            borderWidth={3}
            borderColor="#000000"
            defs={[patternDotsDef('pattern')]}
        />
        <div className="Title">STREAM</div>
    </div>
)

export default Stream
