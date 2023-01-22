module.exports = {
  Upload: {
    abridgeName: { id: 2995 },
    accept: { PC: { attribute: { accept: 'image/*' }, attributeDom: 'input' }, id: 872 },
    action: {
      PC: {
        skip: true,
        event: [
          {
            props: { action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76' },
            expect: [
              {
                trigger: "const fileList = simulateFileChange('input')",
                event: {
                  selectChange: [
                    '${fileList}',
                    {
                      currentSelectedFiles: [
                        {
                          lastModified: 1674355700444,
                          name: 'image-name.png',
                          percent: 0,
                          raw: '${fileList[0]}',
                          size: 10,
                          type: 'image/png',
                          status: 'undefined',
                        },
                      ],
                    },
                  ],
                  change: [
                    {
                      '[0].lastModified': 1674355700444,
                      '[0].response': 'toBeTruthy',
                      '[0].name': 'image-name.png',
                      '[0].percent': 100,
                      '[0].status': 'success',
                      '[0].raw': '${fileList[0]}',
                      '[0].uploadTime': 'toBeTruthy',
                    },
                    {
                      trigger: 'add',
                      'file.raw': '${fileList[0]}',
                      'file.url':
                        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                      'file.name': 'image-name.png',
                      'file.uploadTime': 'toBeTruthy',
                      'file.response': 'toBeTruthy',
                    },
                  ],
                },
                delay: 3000,
              },
            ],
          },
        ],
      },
      id: 873,
    },
    allowUploadDuplicateFile: {
      PC: {
        event: [
          {
            props: {
              files: [
                {
                  name: 'image-name.png',
                  url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
                },
              ],
              action: 'https://cdc.cdn-go.cn/tdc/latest/menu.json',
              allowUploadDuplicateFile: false,
            },
            description: 'allowUploadDuplicateFile is equal to false',
            expect: [
              {
                trigger: "const fileList = simulateFileChange('input')",
                event: {
                  validate: [{ type: 'FILTER_FILE_SAME_NAME', 'files[0].raw': '${fileList[0]}' }],
                },
                delay: true,
              },
            ],
          },
          {
            props: {
              files: [
                {
                  name: 'image-name.png',
                  url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
                },
              ],
              action: 'https://cdc.cdn-go.cn/tdc/latest/menu.json',
              allowUploadDuplicateFile: true,
            },
            description: 'allowUploadDuplicateFile is equal to true',
            expect: [
              { trigger: "simulateFileChange('input')", event: { validate: 'not' }, delay: true },
            ],
          },
        ],
      },
      id: 2454,
    },
    autoUpload: { id: 885 },
    beforeAllFilesUpload: { id: 2928 },
    beforeUpload: { id: 876 },
    children: { id: 1169 },
    data: { id: 877 },
    disabled: {
      PC: {
        event: [
          {
            props: { disabled: true },
            description: 'disabled upload can not trigger onSelectChange',
            expect: [{ trigger: "simulateFileChange('input')", event: { selectChange: 'not' } }],
          },
        ],
      },
      id: 879,
    },
    dragContent: { id: 2991 },
    draggable: { id: 886 },
    fileListDisplay: { id: 2383 },
    files: { id: 887 },
    format: { id: 884 },
    formatRequest: { id: 2946 },
    formatResponse: { id: 1220 },
    headers: { id: 878 },
    isBatchUpload: { id: 2363 },
    locale: { id: 2733 },
    max: { id: 1191 },
    method: { id: 874 },
    mockProgressDuration: { id: 3253 },
    multiple: { id: 880 },
    name: { id: 881 },
    placeholder: { id: 1167 },
    requestMethod: { id: 1789 },
    showUploadProgress: { id: 1790 },
    sizeLimit: { id: 1564 },
    status: { id: 2994 },
    theme: { id: 1182 },
    tips: { id: 1183 },
    trigger: { id: 889 },
    triggerButtonProps: { id: 2985 },
    uploadAllFilesInOneRequest: { id: 2362 },
    useMockProgress: { id: 1987 },
    withCredentials: { id: 882 },
    cancelUpload: { id: 1791 },
    change: { id: 888 },
    dragenter: { id: 1184 },
    dragleave: { id: 1185 },
    drop: { id: 2628 },
    fail: { id: 892 },
    oneFileFail: { id: 2984 },
    oneFileSuccess: { id: 2945 },
    preview: { id: 893 },
    progress: { id: 890 },
    remove: { id: 1170 },
    selectChange: { id: 2337 },
    success: { id: 891 },
    validate: { id: 2929 },
    waitingUploadFilesChange: { id: 2947 },
    triggerUpload: { id: 2989 },
    uploadFiles: { id: 2990 },
    '<T extends UploadFile = UploadFile>': { id: 2996 },
  },
  UploadFile: {
    lastModified: { id: 1177 },
    name: { id: 1179 },
    percent: { id: 1181 },
    raw: { id: 982 },
    response: { id: 1186 },
    size: { id: 1178 },
    status: { id: 979 },
    type: { id: 1180 },
    uploadTime: { id: 2993 },
    url: { id: 981 },
    PlainObject: { id: 3308 },
  },
};