import { Input, withStyles } from '@material-ui/core'
import React from 'react'

const UIKitInlineTextField = withStyles({
  root: {
    '& input': {
      fontSize: 20,
      fontWeight: 600,
      color: 'white'
    }
  },
  underline: {
    '&:after': {
      borderBottomColor: 'white',
    },
    '&:before': {
      borderBottomColor: 'rgba(255,255,255,.4)',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottomColor: 'rgba(255,255,255,.4)',
    },
    input: {
      fontSize: 20,
      fontWeight: 600,
      color: 'white'
    }
  }
})(Input);

/**
 * 
 * Возвращает стилизованный Input из макета сертификата.
 * - [Макет](https://www.figma.com/file/lWb5HgPQxCoJbenzsoMGFk/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0?node-id=646%3A7568)
 * 
 * Поддерживает пропсы Input из Material-UI
 * - [Input](https://material-ui.com/api/input/#props)
 * 
*/

export const InlineTextField = ({
  ...params
}) => {
  return (
    <UIKitInlineTextField
      {...params}
    />
  )
}
