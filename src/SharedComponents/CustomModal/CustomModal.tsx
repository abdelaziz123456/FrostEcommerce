import {View, Text, Modal} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import {styles} from './CustomModal.styles';

type modalProps = {
  shown: boolean;
  transparent?: boolean;
  animation?: 'slide' | 'none' | 'fade';
  requestCloseHandler?: Function;
  content: string;
  confirmButtonFunction?: Function;
  confirmButtonTitle?: string;
  cancelButtonTitle?: string;
  cancelButtonFunction: Function;
};
export default function CustomModal({
  shown,
  transparent = true,
  animation = 'slide',
  requestCloseHandler,
  content,
  confirmButtonFunction,
  confirmButtonTitle = 'confirm',
  cancelButtonTitle = 'cancel',
  cancelButtonFunction,
}: modalProps) {
  return (
    <Modal
      animationType={animation}
      transparent={transparent}
      visible={shown}
      onRequestClose={() => requestCloseHandler()}>
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <Text style={styles.modalText}>{content}</Text>
          <View style={styles.buttonsContainer}>
            {confirmButtonFunction ? (
              <CustomButton
                onPress={confirmButtonFunction}
                buttonTitle={String(confirmButtonTitle)}
                buttonStyle={'primary'}
              />
            ) : (
              <></>
            )}
            <CustomButton
              style={{borderRadius: 30}}
              onPress={cancelButtonFunction}
              buttonTitle={String(cancelButtonTitle)}
              buttonStyle={'primary'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
