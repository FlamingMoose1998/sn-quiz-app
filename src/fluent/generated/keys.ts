import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'b96860c873624f3f855e55ea774b3c53'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'cb08713e5c9840beb6b708f03b3850dd'
                    }
                    'quiz-related-list': {
                        table: 'sys_ui_related_list'
                        id: '6cd5b3ab75064212921a279481cf555a'
                    }
                    'quiz-rounds-entry': {
                        table: 'sys_ui_related_list_entry'
                        id: '0649bda9a0b042b3b731944654888e2c'
                    }
                    'round-questions-entry': {
                        table: 'sys_ui_related_list_entry'
                        id: '30a906a1bd4c46e3832addc704b52150'
                    }
                    'round-related-list': {
                        table: 'sys_ui_related_list'
                        id: '62ffe2a6fd4740a9a5041c4eddabb154'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0138473db8c2466e8cd86194118cd6de'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '019f8e5785b848beab6300bda3c18bc9'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'type'
                            value: '1234'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0878a82d4d244d788a8b0aee983e43f8'
                        key: {
                            name: 'x_0221_quiz_app_category'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16000eb660df43e19866c1aea633c195'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '17cbdf29bcbd4de38ae1e08c2e641dc6'
                        key: {
                            name: 'x_0221_quiz_app_audience'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1e636da8d2d14c3885989baf7cd5394b'
                        key: {
                            name: 'x_0221_quiz_app_round'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1eda50dc8b05492b9a18f57513f0d099'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'question'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '21569d19300342b5ac50c5da940610e4'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26444f0a495e458daebc0953f32424db'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '326410d2447c43caa62007067c1e1bee'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                            element: 'question'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '338baa8d792d4ff2867eea44f0e89c0b'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'answer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '338f22b2e98549c693601e10df6837c3'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3cda748b782f4e1589ff0f66521f9b58'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'type'
                            value: '1ak'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4379b622b321454d92db2c4fb620a736'
                        key: {
                            name: 'x_0221_quiz_app_category'
                            element: 'color'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4aadd2cc9fcb40c08dcc68cce51a36f5'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'media_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ed6b20427844201a01e47a102a02042'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5049bea9329a482eb408ede91e6b4593'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5096af50c2ae4397b0f222830736a656'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51cde82a78e449e4ab3118fe91c4eda9'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '529545e41cd04c5dade3666d525d9bdb'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                            element: 'round'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54ac300093a44438a11df42499b8d1ec'
                        key: {
                            name: 'x_0221_quiz_app_category'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '551fa26dcad3444287837fd1e58903a2'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                            element: 'question'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '55688b805ef44762b7d03dfd0344e2eb'
                        key: {
                            name: 'x_0221_quiz_app_audience'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56c79edad02846a9b2edd482efe3203e'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'audience'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58129bd2e0214b248bc598c646e6dd02'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5972cce44c484ec4902012e3905a3867'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'media_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c5894ccdb2f4ed38dfeaab1aaf47f33'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'filename'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d2a5e7e61a24e41ad4931a01abf1f51'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d86cd55678f42e7800bbbc758bcec17'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f396aaf94c24f21b627e89b14646bcd'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'type'
                            value: 'normal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61f0687386c2423c84f87e1b3249cd2c'
                        key: {
                            name: 'x_0221_quiz_app_category'
                            element: 'color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '62116965728848d0bbe2b58de93c8963'
                        key: {
                            name: 'x_0221_quiz_app_round'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '67a2369e4da347749960fc94de17d778'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'question'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '684e4fe4204e4e568d943fb330a99b90'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'type'
                            value: 'normal'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c02c467ac53443681d3b01250a53738'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                            element: 'round'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6e6bdf370565467c8e496d37175ee9a2'
                        key: {
                            name: 'x_0221_quiz_app_category'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6f0a86a650e74ceaad936f7956b81b47'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '763958470d9d4684bed54ce27cb84440'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                            element: 'quiz'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '786a2d2431014e1099f6fbaa94852ccf'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'type'
                            value: '1234'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7b8fa82de97c4e92bb641f7a8004534e'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7c09412dbdcd4c439d58b4b09969ff46'
                        key: {
                            name: 'x_0221_quiz_app_question'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7cbd38e172a149c5b7bccd35cdb308b7'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f553cb644bf4b9a9fc64ed816b86f90'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'answer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '803bf10658664b33b588dcf581723518'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81aa43ca07bd4f008cc5268528d84261'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8236bf0dddce4bb39e244e6b01171d43'
                        key: {
                            name: 'x_0221_quiz_app_audience'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '82beacf035ab4ddea0db88f3a89d117b'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8b4fb152c5ac4d79aecd1efac55868ec'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b92512ec8064bd48dbcdf9a88b881d9'
                        key: {
                            name: 'x_0221_quiz_app_audience'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8c85232ce66f4242b357bc05d02a59a9'
                        key: {
                            name: 'x_0221_quiz_app_category'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8cf4b8fa012a4f1d9dc479df51657210'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d8cd3882d5c4654b510d5ec7a7444ee'
                        key: {
                            name: 'x_0221_quiz_app_audience'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91d7ab9fc6b44e0d81896056e146f214'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9427d63751924f999ac4bc79c469eb7b'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '945b77955fa240ebb25ea1acbd7fe29b'
                        key: {
                            name: 'x_0221_quiz_app_question'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '96f5f943da8e4715b8f3624ac72c60b5'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'media_type'
                            value: 'video'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0dc2ef9d4cb4580bcb5aeb14e60bd67'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8feb4c12713410b92a5e1d03e62f5f3'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'media_type'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a917b0b77a5b46f4bf18d6f1464683f0'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b18ea459812d454ca81cb76da0c5895b'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b20224702b7b457cad2ea44be440ae21'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b6d891f066d34572ae563b91922a51fb'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b74cef3896d049e084e185c472e8f663'
                        key: {
                            name: 'x_0221_quiz_app_category'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c78ce17f030b4f588a40fb184bb08e48'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                            element: 'round'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7ec3ad9825d4795a59e8d04468a9721'
                        key: {
                            name: 'x_0221_quiz_app_category'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd4ada2e5084490e8c76cc1bda552fd7'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf353d1279a54a1da816ed1d22f3a764'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                            element: 'quiz'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd31ef9b280c648588a52b3c6916d81b4'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'media_type'
                            value: 'audio'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5a7af622c0f4fc5a00c301bf8f46211'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd89732ad1cc747489fceb48c38b2bd97'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9bb4386cc024c959eeb8bb996b32512'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'audience'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da4641e8db784957afdf5553e3a79597'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'media_type'
                            value: 'image'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da4e48b64b4c469b832f9b70725caae2'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0584f10705343c4a20440c4a4e47d13'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'filename'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6119914896d412ba06ae011b073cb45'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                            element: 'round'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4b04f952adb43e483dff2b07bc5dc16'
                        key: {
                            name: 'x_0221_quiz_app_audience'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f849d249b86e4abab16b6cdce2e5b472'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            element: 'number'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
