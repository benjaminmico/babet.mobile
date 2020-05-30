import ImagePicker from 'react-native-image-crop-picker'

/**
 * Get Image from device gallery
 * Select
 */
export const showImagePicker = () => {
  ImagePicker.openPicker({
    multiple: true,
  }).then(images => {
    return images
  })
}
