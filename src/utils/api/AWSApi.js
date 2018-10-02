import S3FileUpload from './react-s3';

const config = {
    bucketName: 'flatsnapp-thumbs',
    region: 'us-west-2',
    accessKeyId: 'AKIAIRBTCZXWZ7RHEZFA',
    secretAccessKey: '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',
}

export function sendFile(file, fileName) {
  return S3FileUpload
    .uploadFile(file, fileName, config)
    // .then(data => {
    //   debugger
    // })
    // .catch(err => console.error(err))
}

export function deleteFile(fileName) {
  S3FileUpload
    .deleteFile(fileName, config)
}
