export const InputFieldTheme =   {
    flex: 1,
    minHeight: '$14',
    flexDirection: 'row',
    overflow: 'hidden',
    alignContent: 'center',
    lineHeight: '$md',
    minWidth: '100%',
    fontSize: '$xl',
    color: '$brandPrimaryLineHeavy',
    props: {
      placeholderTextColor: '$brandPrimaryLineHeavy',
    },

    variants: {
      variant: {
        payment: {
          backgroundColor: '$transparent',
          color: '#FFFFFF',
          fontSize: '$4xl',
          lineHeight: '$4xl',
          _input: {
            fontSize: '$4xl',
            lineHeight: '$4xl',
          },
        },
      },
    },
  };