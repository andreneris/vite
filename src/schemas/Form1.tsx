import { RJSFSchema } from '@rjsf/utils';
import { customizeValidator } from '@rjsf/validator-ajv8';

export const schema: RJSFSchema = {
  type: 'object',
  properties: {
    number: {
      type: 'string',
      title: 'Número'
    },
    state: {
      type: 'number',
      title: 'State'
    },
    opened_by: {
      type: 'string',
    },
    opened_at: {
      type: 'string',
      format: 'date',
    },
    caller: {
      type: 'string',
    },
    created_on: {
      type: 'string',
      format: 'date',
    },


    matrix: {
      title:'',
      type:'object',
      properties: {
        impact: {
          type: 'string',
        },

        urgency: {
          type: 'string',
        },
        priority: {
          type: 'string',
        },
      }
    },

    details:{
      title:'Detalhes',
      type:'object',
      properties:{
        shortDescription: {
          type: 'string',
        },
        description: {
          type: 'string',
        },    
      },
  
    }


  },
  required: ['opened_by', 'shortDescription']
};

export const uischema = {
  number: {
    'ui:options': { 'readonly': true,xs:6 }
  },
  state: {
    'ui:xs':6,
  },
  opened_by: {
    'ui:xs': '6',
  },
  opened_at: {
    'ui:xs': '6',
  },
  caller: {
    'ui:xs': '6',
  },
  created_on: {
    'ui:xs': '6',
  },

  matrix: {
  //  xs: '12',
    impact: {
      'ui:xs': '4',
    },
    urgency: {
      'ui:xs': '4',
    },
    priority: {
      'ui:xs': '4',
    },
  },

  details:{
    description: {
      'ui:widget': 'textarea',
      'ui:options': { color: 'red', rows: 8 },
    },
  },

  additionalItems: {
    type: 'boolean',
  },
};

const customFormats = {
  'phone-us': /\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
};

const validator = customizeValidator({ customFormats });

export default validator;
