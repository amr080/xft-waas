export const InputTheme = {
    borderWidth: 1,
    borderColor: '$brandPrimaryLineHeavy',
    borderRadius: '$sm',
    flexDirection: 'row',
    overflow: 'hidden',
    minHeight: '$14',
    fontSize: '$xl',
    alignContent: 'center',
    wordWrap: 'normal',
    wordBreak: 'normal',
    whiteSpace: 'nowrap',

    ':hover': {
      borderColor: '$brandPrimaryLineHeavy',
    },

    ':focus': {
      borderColor: '$brandPrimary',
      ':hover': {
        borderColor: '$brandPrimary',
      },
    },

    ':disabled': {
      opacity: 0.38,
      ':hover': {
        borderColor: '$brandPrimaryLineHeavy',
      },
    },

    _input: {
      py: 'auto',
      px: '$6',
    },

    _icon: {
      color: '$brandPrimary',
    },

    variants: {
      size: {
        xl: {
          h: '$12',
          _input: {
            fontSize: '$xl',
          },
          _icon: {
            h: '$6',
            w: '$6',
          },
        },
        lg: {
          h: '$11',
          _input: {
            fontSize: '$lg',
          },
          _icon: {
            h: '$5',
            w: '$5',
          },
        },
        md: {
          h: '$10',
          _input: {
            fontSize: '$md',
          },
          _icon: {
            h: '$4',
            w: '$4',
          },
        },
        sm: {
          h: '$9',
          _input: {
            fontSize: '$sm',
          },
          _icon: {
            h: '$3.5',
            w: '$3.5',
          },
        },
      },
      variant: {
        outline: {
          ':focus': {
            borderColor: '$brandPrimary',
          },
          ':invalid': {
            borderColor: '$brandNegative',
            ':hover': {
              borderColor: '$brandNegative',
            },
            ':focus': {
              borderColor: '$brandNegative',
              ':hover': {
                borderColor: '$brandNegative',
              },
            },
            ':disabled': {
              ':hover': {
                borderColor: '$brandNegative',
              },
            },
          },
        },
        payment: {
          h: '$30',
          fontSize: '$4xl',
          lineHeight: '$4xl',
          _input: {
            fontSize: '$4xl',
            lineHeight: '$4xl',
          },
          borderWidth: 0,
          borderColor: '$brandNegative',
          ':focus': {
            borderWidth: 0,
            borderColor: '$transparent',
          },
          ':invalid': {
            borderWidth: 0,
            borderColor: '$transparent',
            ':hover': {
              borderWidth: 0,
              borderColor: '$transparent',
            },
            ':focus': {
              borderWidth: 0,
              borderColor: '$transparent',
              ':hover': {
                borderWidth: 0,
                borderColor: '$transparent',
              },
            },
            ':disabled': {
              ':hover': {
                borderWidth: 0,
                borderColor: '$transparent',
              },
            },
          },
        },
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
  }