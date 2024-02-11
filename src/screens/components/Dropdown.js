import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown as OriginalDropdown } from 'react-native-element-dropdown';

const Dropdown = ({ data, onChange , handleValueChange}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleValueChange = (item) => {
    setValue(item.value);
    setIsFocus(false);
    onChange && onChange(item);
  };

  return (
    <View style={styles.Drobcontainer}>
      <OriginalDropdown
        style={[styles.dropdown, isFocus && { borderColor: '#FFDE59' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? ' Select One' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleValueChange}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  Drobcontainer: {
    padding: 16,
    width: 240,
    height: 200,
    top: '23%',
    left: '35%'
  },
  dropdown: {
    height: 50,
    borderColor: '#848484',
    borderWidth: 0.5,
    borderRadius: 30,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'red',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});