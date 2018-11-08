import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    renderPickerDays() {
        const daysOfTheWeek = [
            { id: 0, label: 'Sunday' },
            { id: 1, label: 'Monday' },
            { id: 2, label: 'Tuesday' },
            { id: 3, label: 'Wednesday' },
            { id: 4, label: 'Thursday' },
            { id: 5, label: 'Friday' },
            { id: 6, label: 'Saturday' }
        ];

        return daysOfTheWeek.map(day => <Picker.Item key={day.id} label={day.label} value={day.label} style={{  }} />);
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="(00)0000-0000"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection style={styles.pickerCardSectionStyle}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.props.shift}
                        onValueChange={text => this.props.employeeUpdate({ prop: 'shift', value: text })}
                    >
                        {this.renderPickerDays()}
                    </Picker>
                </CardSection>
            </View>
        );
    }
    
}


const styles = {
    pickerCardSectionStyle: {
        height: 55,
        alignItems: 'center'
    },
    pickerStyle: {
        flex: 2,
        margin: -8
    },
    pickerTextStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
