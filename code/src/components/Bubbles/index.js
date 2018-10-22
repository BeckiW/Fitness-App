import React from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'
import { generateCountriesData } from '@nivo/generators'
import './style.css'

const colors = ['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f']




  const Bubble = () => (
      <div className = "containerBubble">
          <ResponsiveBubble
              root={{
                  country: 'root',
                  children: generateCountriesData(['value'], { size: 24 }),
              }}
              identity="country"
              value="value"
              leavesOnly={true}
              colors={['#fae04d', '#ff744c', '#789792', '#b1646a', '#efa9a1', '#8470c7', '#97a66f']}
              labelTextColor="#000"
              labelSkipRadius={12}
              colorBy="country"
              borderWidth={3}
              borderColor="#000"
              padding={6}
              isInteractive={false}
          />
          <div className="Title">BUBBLE</div>
      </div>
  )

  export default Bubble
