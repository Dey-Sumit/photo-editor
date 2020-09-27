import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SidebarItem from './components/SidebarItem';
import Slider from './components/Slider';


const DEFAULT_OPTIONS = [
    {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'GrayScale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
    },
    {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 10
        },
        unit: 'px'
    },
]

const App = () => {
    const [selectedOptionsIndex, setSelectedOptionsIndex] = useState(0)
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const selectedOption = options[selectedOptionsIndex]

    const handleSliderChange = ({ target }) => {
        setOptions(prevOption => {
            return prevOption.map((option, index) => {
                if (index !== selectedOptionsIndex) return option
                return { ...option, value: target.value }
            })
        })
    }

    const getImageStyle = () => {
        const filters = options.map(option => {
            return `${option.property}(${option.value}${option.unit})`
        })
        return { filter: filters.join(' ') }
    }

    return (
        <div className="app">
            <div className="app__header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/1200px-Adobe_Photoshop_CS6_icon.svg.png" alt="photoshop lite" className="app__logo" />
                <div className="image-title">Girl's photo</div>
                <button className="button_download">DOWNLOAD</button>
                <button className="button_save-draft">SAVE DRAFT</button>

            </div>
            <Row>
                <Col md={1} className="app__left">
                </Col>
                <Col md={8} className="app__center">
                    <div className="main-image" style={getImageStyle()} />

                </Col>
                <Col md={3} className="app__right">
                    <div className="app__sidebar">
                        {
                            options.map(
                                (option, index) =>
                                    <SidebarItem
                                        key={index}
                                        name={option.name}
                                        active={index === selectedOptionsIndex}
                                        handleClick={() => setSelectedOptionsIndex(index)}
                                    />)
                        }
                    </div>
                    <Slider
                        min={selectedOption.range.min}
                        max={selectedOption.range.max}
                        value={selectedOption.value}
                        handleChange={handleSliderChange}
                    />

                </Col>
            </Row>
        </div>
    );
};

export default App;