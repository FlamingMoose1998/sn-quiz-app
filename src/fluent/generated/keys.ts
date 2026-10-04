import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '0b6beea48323cfd0429b6260ceaad39f': {
                        table: 'sys_scope_privilege'
                        id: '0b6beea48323cfd0429b6260ceaad39f'
                    }
                    '0b6beea48323cfd0429b6260ceaad3a3': {
                        table: 'sys_scope_privilege'
                        id: '0b6beea48323cfd0429b6260ceaad3a3'
                    }
                    '4b6beea48323cfd0429b6260ceaad39a': {
                        table: 'sys_scope_privilege'
                        id: '4b6beea48323cfd0429b6260ceaad39a'
                    }
                    '5b6b22e48323cfd0429b6260ceaad319': {
                        table: 'sys_scope_privilege'
                        id: '5b6b22e48323cfd0429b6260ceaad319'
                    }
                    '5d96634083bb8f54429b6260ceaad321': {
                        table: 'sys_script_include'
                        id: '5d96634083bb8f54429b6260ceaad321'
                    }
                    '726ba2648323cfd0429b6260ceaad3ac': {
                        table: 'sys_scope_privilege'
                        id: '726ba2648323cfd0429b6260ceaad3ac'
                    }
                    '8812086383270b54429b6260ceaad388': {
                        table: 'par_dashboard_tab'
                        id: '8812086383270b54429b6260ceaad388'
                    }
                    a09200e383270b54429b6260ceaad363: {
                        table: 'par_dashboard_widget'
                        id: 'a09200e383270b54429b6260ceaad363'
                    }
                    'audience-module': {
                        table: 'sys_app_module'
                        id: 'f6717394670947d8b34cf7ee08af56e4'
                    }
                    b5a07fc483fb8f54429b6260ceaad398: {
                        table: 'sys_security_acl'
                        id: 'b5a07fc483fb8f54429b6260ceaad398'
                    }
                    b87d00eb83670b54429b6260ceaad33b: {
                        table: 'par_dashboard_widget'
                        id: 'b87d00eb83670b54429b6260ceaad33b'
                    }
                    bbbfab4483bb8f54429b6260ceaad395: {
                        table: 'sys_script_include'
                        id: 'bbbfab4483bb8f54429b6260ceaad395'
                    }
                    bf02086383270b54429b6260ceaad346: {
                        table: 'par_dashboard_user_metadata'
                        id: 'bf02086383270b54429b6260ceaad346'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'b96860c873624f3f855e55ea774b3c53'
                    }
                    'category-module': {
                        table: 'sys_app_module'
                        id: '59b11a2eae784f8b86c0dfdd0296a613'
                    }
                    'delete-quiz-action': {
                        table: 'sys_ui_action'
                        id: '293804ad87bb4854a0df81135ec2c6b9'
                    }
                    ef2d08ab83670b54429b6260ceaad300: {
                        table: 'par_dashboard_widget'
                        id: 'ef2d08ab83670b54429b6260ceaad300'
                    }
                    Io: {
                        table: 'sys_script_include'
                        id: '34a0afd866a24eb9b40966f1d5b38c7e'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'cb08713e5c9840beb6b708f03b3850dd'
                    }
                    'process-import-action': {
                        table: 'sys_ui_action'
                        id: 'c43157e2ca394f41aa31d1e7554ff19c'
                    }
                    'question-module': {
                        table: 'sys_app_module'
                        id: '7451ee798c0e42e097878e5b6a8e695e'
                    }
                    'quiz-app-menu': {
                        table: 'sys_app_application'
                        id: 'db625c45cd8b469686a9cbd39ba48f5c'
                    }
                    'quiz-import-api': {
                        table: 'sys_ws_definition'
                        id: '9b0c69f3d08b4942a7ee79402eecc05d'
                    }
                    'quiz-import-module': {
                        table: 'sys_app_module'
                        id: '29f1eb7a38174ea3a2897322c1c05ac2'
                    }
                    'quiz-import-route': {
                        table: 'sys_ws_operation'
                        id: '1433c792cf6f463997954b420bea0744'
                    }
                    'quiz-module': {
                        table: 'sys_app_module'
                        id: '84d7b74e9f5c4789bcb540527052bc47'
                    }
                    'quiz-related-list': {
                        table: 'sys_ui_related_list'
                        id: '6cd5b3ab75064212921a279481cf555a'
                    }
                    'quiz-rounds-entry': {
                        table: 'sys_ui_related_list_entry'
                        id: '0649bda9a0b042b3b731944654888e2c'
                    }
                    'quiz-rounds-rel': {
                        table: 'sys_relationship'
                        id: '3ad191ecd6bf4e8b8e36dc997a2b0125'
                    }
                    QuizImporter: {
                        table: 'sys_script_include'
                        id: 'd1cda35bf8754554b354b1f67752546b'
                        deleted: true
                    }
                    'raw-json-module': {
                        table: 'sys_app_module'
                        id: 'f3a67aa4e2184affb3ccbace7fa1bed8'
                    }
                    'round-module': {
                        table: 'sys_app_module'
                        id: 'd728c45e7b934c839061112fd498718e'
                    }
                    'round-questions-entry': {
                        table: 'sys_ui_related_list_entry'
                        id: '30a906a1bd4c46e3832addc704b52150'
                    }
                    'round-questions-rel': {
                        table: 'sys_relationship'
                        id: '93a9302db39c4ea093758a663c1ff285'
                    }
                    'round-related-list': {
                        table: 'sys_ui_related_list'
                        id: '62ffe2a6fd4740a9a5041c4eddabb154'
                    }
                    'src_server_script-includes_importQuizJson_js': {
                        table: 'sys_module'
                        id: 'e4977768f6ad479daaff29e352f4d5ad'
                    }
                    'src_server_script-includes_io_js': {
                        table: 'sys_module'
                        id: '24759a2563204fd0b1886c245824192a'
                    }
                    'src_server_script-includes_quiz-importer_js': {
                        table: 'sys_module'
                        id: '1ac8d36b6be24d899aa6a9abfcaec9b6'
                    }
                    'tools-separator': {
                        table: 'sys_app_module'
                        id: 'caad8602a3cf4ab69ffa7bd343414e88'
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
                        id: '0378c7a082744954af7d59311490305d'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'qa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0656de735b5646659c66611bc01cd93f'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'p1'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: '0a5ccf368e094138949cecd30abc6ddd'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'difficulty'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b0bb9373496440cb7e562a4487d3f98'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'path'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1012b74783eb4754429b6260ceaad3d0'
                        key: {
                            sys_ui_section: {
                                id: 'd012b74783eb4754429b6260ceaad31f'
                                key: {
                                    name: 'x_0221_quiz_app_raw_json'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'json'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10958c8ccffe4e2bab3149ce5702b5e8'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'p4'
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
                        table: 'sys_ui_element'
                        id: '1acb6ee48323cfd0429b6260ceaad38a'
                        key: {
                            sys_ui_section: {
                                id: '52cb6ee48323cfd0429b6260ceaad382'
                                key: {
                                    name: 'x_0221_quiz_app_quiz_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'round'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c3f037ff6b84195928a511d08f40d33'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                            element: 'number'
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
                        table: 'sys_ui_element'
                        id: '20bb6ae48323cfd0429b6260ceaad3ea'
                        key: {
                            sys_ui_section: {
                                id: '6cbb6ae48323cfd0429b6260ceaad3ab'
                                key: {
                                    name: 'x_0221_quiz_app_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'type'
                            position: '3'
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
                        id: '217f9e915520416ca0548d3d0f582604'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '260c2059b59940be89569c84b09faef6'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '262cf1ac836b8fd0429b6260ceaad31f'
                        key: {
                            sys_ui_section: {
                                id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                                key: {
                                    name: 'x_0221_quiz_app_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'category'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '262cfd6c836b8fd0429b6260ceaad36b'
                        key: {
                            sys_ui_section: {
                                id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                                key: {
                                    name: 'x_0221_quiz_app_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '1'
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
                        table: 'sys_ui_section'
                        id: '27767a6c8363cfd0429b6260ceaad3d7'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '29e28aed07ca4dceaf61fc770b83bcbd'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a523d934851466ea9a79a35003afca1'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'p4'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2b763e6083a3cfd0429b6260ceaad3bb'
                        key: {
                            sys_ui_section: {
                                id: '27767a6c8363cfd0429b6260ceaad3d7'
                                key: {
                                    name: 'x_0221_quiz_app_round_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '2b83072cfa004409b218a94c9db29d25'
                        key: {
                            application_file: 'ebf6cde8d7cd47eb864c9aa6d8022be6'
                            source_artifact: '985e27878742424fad927ada46cfec78'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e2e1d02a28247f5bc0f937a1395f44c'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                            element: 'number'
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
                        table: 'sys_documentation'
                        id: '34471382b24b4c1891ff51d1dd56ac50'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '353425940bbc484494363e060d05a7d6'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'path'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '357bf52c836b8fd0429b6260ceaad350'
                        key: {
                            sys_ui_section: {
                                id: '617bf52c836b8fd0429b6260ceaad33c'
                                key: {
                                    name: 'x_0221_quiz_app_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '3964c40536b840c8ac1591cfafd1d1fe'
                        key: {
                            endpoint: 'x_0221_quiz_app_import.do'
                        }
                    },
                    {
                        table: 'par_dashboard_permission'
                        id: '3b02086383270b54429b6260ceaad33f'
                        key: {
                            dashboard: 'f302086383270b54429b6260ceaad33b'
                            user: '6816f79cc0a8016401c5a33be04be441'
                            group: 'NULL'
                            role: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c6ca448bd5a4ccdbfaa2e6afdc10516'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'parent'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '3e66279ff5e74961bda4742693aab1c3'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'difficulty'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3fa8e1a7627e425ba9c9b91d7c529212'
                        key: {
                            name: 'x_0221_quiz_app_round_question'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '425492405ece456db0cfbcdd96bc5095'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'theme'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '42a0ffc483fb8f54429b6260ceaad349'
                        key: {
                            sys_security_acl: 'b5a07fc483fb8f54429b6260ceaad398'
                            sys_user_role: {
                                id: 'fa80fbc483fb8f54429b6260ceaad30d'
                                key: {
                                    name: 'x_0221_quiz_app.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42b3e246797c4bc295a284f96536e7cb'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                            element: 'quiz'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '44e3aaeb0a1a40c58ea5f0809dda79ca'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'difficulty'
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
                        table: 'sys_dictionary'
                        id: '4af053178ccb443f957b7859f5e0ee3e'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'question'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4dc8e405b52f49dea902c17ef8c1d899'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'answer'
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
                        table: 'sys_ui_section'
                        id: '52cb6ee48323cfd0429b6260ceaad382'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '53cd83360ebc477d9d507c95790f4807'
                        key: {
                            name: 'x_0221_quiz_app/main'
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
                        table: 'sys_choice'
                        id: '54f708defb514e868c742fdf266d99b4'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'language'
                            value: 'en'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        id: '564d726e0d474d8ea145024f055a8a9b'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'p3'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5673ed5a378e4b2f8acd65b0785cf3df'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'parent'
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
                        table: 'sys_ui_element'
                        id: '5acb6ee48323cfd0429b6260ceaad38c'
                        key: {
                            sys_ui_section: {
                                id: '52cb6ee48323cfd0429b6260ceaad382'
                                key: {
                                    name: 'x_0221_quiz_app_quiz_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
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
                        table: 'sys_ui_element'
                        id: '5ecb6ee48323cfd0429b6260ceaad389'
                        key: {
                            sys_ui_section: {
                                id: '52cb6ee48323cfd0429b6260ceaad382'
                                key: {
                                    name: 'x_0221_quiz_app_quiz_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
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
                        table: 'sys_db_object'
                        id: '6040986f3b3041faacc8e37394593238'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '60736c121e8f44bbb9ed813065e549cf'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '617bf52c836b8fd0429b6260ceaad33c'
                        key: {
                            name: 'x_0221_quiz_app_quiz'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_choice_set'
                        id: '62cfe664f4ae47fbb21ed7f4c297a76d'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'language'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '62d00fe3186f4fb7b60f295938ec0a5c'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '64bb6ae48323cfd0429b6260ceaad3e7'
                        key: {
                            sys_ui_section: {
                                id: '6cbb6ae48323cfd0429b6260ceaad3ab'
                                key: {
                                    name: 'x_0221_quiz_app_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '64bb6ae48323cfd0429b6260ceaad3e9'
                        key: {
                            sys_ui_section: {
                                id: '6cbb6ae48323cfd0429b6260ceaad3ab'
                                key: {
                                    name: 'x_0221_quiz_app_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64f87504b5814154807f27882fa2ca75'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'p2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '662cf1ac836b8fd0429b6260ceaad321'
                        key: {
                            sys_ui_section: {
                                id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                                key: {
                                    name: 'x_0221_quiz_app_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'answer'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6686b452bd044f82b6ae20ee4af5fa7a'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'language'
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
                        table: 'sys_ui_element'
                        id: '6a2cf1ac836b8fd0429b6260ceaad31e'
                        key: {
                            sys_ui_section: {
                                id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                                key: {
                                    name: 'x_0221_quiz_app_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6a2cfd6c836b8fd0429b6260ceaad36a'
                        key: {
                            sys_ui_section: {
                                id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                                key: {
                                    name: 'x_0221_quiz_app_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'question'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a3c04e984af4aaf83f1f5a5decb0c9c'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a508508084941f9bbdd9016ebbb1259'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'fullscreen'
                            language: 'en'
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
                        table: 'sys_ui_section'
                        id: '6cbb6ae48323cfd0429b6260ceaad3ab'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
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
                        table: 'sys_ui_element'
                        id: '6f763e6083a3cfd0429b6260ceaad3ba'
                        key: {
                            sys_ui_section: {
                                id: '27767a6c8363cfd0429b6260ceaad3d7'
                                key: {
                                    name: 'x_0221_quiz_app_round_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'round'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74c87917e5e1461b9d2987361b01c5c7'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'p1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '757bf52c836b8fd0429b6260ceaad352'
                        key: {
                            sys_ui_section: {
                                id: '617bf52c836b8fd0429b6260ceaad33c'
                                key: {
                                    name: 'x_0221_quiz_app_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
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
                        table: 'sys_ui_element'
                        id: '797bf52c836b8fd0429b6260ceaad34f'
                        key: {
                            sys_ui_section: {
                                id: '617bf52c836b8fd0429b6260ceaad33c'
                                key: {
                                    name: 'x_0221_quiz_app_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a152cd0246745d2a98d1025fa8720cc'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'question'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '7d2f6d7f48a74740aa90aadf717194e3'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'difficulty'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_documentation'
                        id: '7fddcad9a441481e9e5e43aef5d50bc9'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'NULL'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '927b5e59b3f64984899d5637c83ea193'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'language'
                            value: 'nl'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sn_glider_source_artifact'
                        id: '985e27878742424fad927ada46cfec78'
                        key: {
                            name: 'x_0221_quiz_app_import.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b81ee85290d493e9af9aae134f775e3'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'answer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9ec2937d43874643a18be734e82664ea'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'p2'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9ecb6ee48323cfd0429b6260ceaad38b'
                        key: {
                            sys_ui_section: {
                                id: '52cb6ee48323cfd0429b6260ceaad382'
                                key: {
                                    name: 'x_0221_quiz_app_quiz_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'quiz'
                            position: '3'
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
                        table: 'sys_ui_element'
                        id: 'a3763e6083a3cfd0429b6260ceaad3ba'
                        key: {
                            sys_ui_section: {
                                id: '27767a6c8363cfd0429b6260ceaad3d7'
                                key: {
                                    name: 'x_0221_quiz_app_round_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a4f82b820fb041f491d62482c23209bb'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'difficulty'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a63151e45e334698af938d0cd823d698'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'difficulty'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a8965ccc47664a9b8880fcf336ad4d05'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a8bb6ae48323cfd0429b6260ceaad3e8'
                        key: {
                            sys_ui_section: {
                                id: '6cbb6ae48323cfd0429b6260ceaad3ab'
                                key: {
                                    name: 'x_0221_quiz_app_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
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
                        table: 'sys_ui_element'
                        id: 'aa2cf1ac836b8fd0429b6260ceaad320'
                        key: {
                            sys_ui_section: {
                                id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                                key: {
                                    name: 'x_0221_quiz_app_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'filename'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ae2cf1ac836b8fd0429b6260ceaad31d'
                        key: {
                            sys_ui_section: {
                                id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                                key: {
                                    name: 'x_0221_quiz_app_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'media_type'
                            position: '3'
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
                        table: 'sys_dictionary'
                        id: 'b4382092321545e6bd48112f343dc683'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                            element: 'name'
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
                        table: 'sys_ui_element'
                        id: 'b97bf52c836b8fd0429b6260ceaad351'
                        key: {
                            sys_ui_section: {
                                id: '617bf52c836b8fd0429b6260ceaad33c'
                                key: {
                                    name: 'x_0221_quiz_app_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'date'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b9cfa3f425074b91b3a94dd348487e11'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'p3'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'bb02086383270b54429b6260ceaad376'
                        key: {
                            dashboard: 'f302086383270b54429b6260ceaad33b'
                            dashboard_tab: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd7bf52c836b8fd0429b6260ceaad34e'
                        key: {
                            sys_ui_section: {
                                id: '617bf52c836b8fd0429b6260ceaad33c'
                                key: {
                                    name: 'x_0221_quiz_app_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf0a3711b36b4124af4ba7b79842afd4'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                            element: 'json'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'c012086383270b54429b6260ceaad38e'
                        key: {
                            dashboard: 'f302086383270b54429b6260ceaad33b'
                            dashboard_tab: '8812086383270b54429b6260ceaad388'
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
                        table: 'sys_dictionary'
                        id: 'ca57f508697e44c4927a79cc14fb8c14'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'cd2b645012dc4830aa14b3ed3e2a58a4'
                        key: {
                            application_file: '3964c40536b840c8ac1591cfafd1d1fe'
                            source_artifact: '985e27878742424fad927ada46cfec78'
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
                        table: 'sys_ui_section'
                        id: 'd012b74783eb4754429b6260ceaad31f'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1f63fdca45741b6aaa663708ea59dec'
                        key: {
                            name: 'x_0221_quiz_app_round'
                            element: 'theme'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd28faa7757ff427a9012b10060578478'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                            element: 'quiz'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd2cb6ee48323cfd0429b6260ceaad38b'
                        key: {
                            sys_ui_section: {
                                id: '52cb6ee48323cfd0429b6260ceaad382'
                                key: {
                                    name: 'x_0221_quiz_app_quiz_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
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
                        table: 'par_dashboard_visibility'
                        id: 'd412086383270b54429b6260ceaad39f'
                        key: {
                            dashboard: 'f302086383270b54429b6260ceaad33b'
                            experience: '08c73d60537101100834ddeeff7b1287'
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
                        table: 'sys_documentation'
                        id: 'd73f88d3e71f45cea29f68e345b52ad6'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd812b74783eb4754429b6260ceaad3ce'
                        key: {
                            sys_ui_section: {
                                id: 'd012b74783eb4754429b6260ceaad31f'
                                key: {
                                    name: 'x_0221_quiz_app_raw_json'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd812b74783eb4754429b6260ceaad3d0'
                        key: {
                            sys_ui_section: {
                                id: 'd012b74783eb4754429b6260ceaad31f'
                                key: {
                                    name: 'x_0221_quiz_app_raw_json'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'quiz'
                            position: '2'
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
                        table: 'ua_table_licensing_config'
                        id: 'd958ffda832e405bbc00d243e8702a95'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
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
                        table: 'sys_documentation'
                        id: 'dab974111f864effbc2c8d835fa1694e'
                        key: {
                            name: 'x_0221_quiz_app_quiz_round'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dbfed7ac5b4c4dc3805ad552cd4f3ac9'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                            element: 'name'
                            language: 'en'
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
                        table: 'sys_ui_element'
                        id: 'e22cf1ac836b8fd0429b6260ceaad31d'
                        key: {
                            sys_ui_section: {
                                id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                                key: {
                                    name: 'x_0221_quiz_app_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2cbbaa87d194e3fbe417bdf18887ad8'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'qa'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'e2db9441886c4b7582fb2e27b9fcd952'
                        key: {
                            application_file: '53cd83360ebc477d9d507c95790f4807'
                            source_artifact: '985e27878742424fad927ada46cfec78'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2f46320ddc9458283249d1cd778e943'
                        key: {
                            name: 'x_0221_quiz_app_qa'
                            element: 'language'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e39ac832a8eb49ae961fa40115e94b10'
                        key: {
                            name: 'x_0221_quiz_app_question1234'
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
                        table: 'sys_ui_element'
                        id: 'e7763e6083a3cfd0429b6260ceaad3b9'
                        key: {
                            sys_ui_section: {
                                id: '27767a6c8363cfd0429b6260ceaad3d7'
                                key: {
                                    name: 'x_0221_quiz_app_round_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'question'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e8bb6ae48323cfd0429b6260ceaad3ea'
                        key: {
                            sys_ui_section: {
                                id: '6cbb6ae48323cfd0429b6260ceaad3ab'
                                key: {
                                    name: 'x_0221_quiz_app_round'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eb763e6083a3cfd0429b6260ceaad3b8'
                        key: {
                            sys_ui_section: {
                                id: '27767a6c8363cfd0429b6260ceaad3d7'
                                key: {
                                    name: 'x_0221_quiz_app_round_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'ebf6cde8d7cd47eb864c9aa6d8022be6'
                        key: {
                            name: 'x_0221_quiz_app/main.js.map'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ee2cf1ac836b8fd0429b6260ceaad31f'
                        key: {
                            sys_ui_section: {
                                id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                                key: {
                                    name: 'x_0221_quiz_app_question'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ee2cfd6c836b8fd0429b6260ceaad365'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f147b6b1872d49c98c6b3234a2539599'
                        key: {
                            name: 'x_0221_quiz_app_raw_json'
                            element: 'json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f17bf52c836b8fd0429b6260ceaad34d'
                        key: {
                            sys_ui_section: {
                                id: '617bf52c836b8fd0429b6260ceaad33c'
                                key: {
                                    name: 'x_0221_quiz_app_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1cee8c2b5e94313939aac5f32065127'
                        key: {
                            name: 'x_0221_quiz_app_question'
                            element: 'fullscreen'
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
                    {
                        table: 'sys_user_role'
                        id: 'fa80fbc483fb8f54429b6260ceaad30d'
                        key: {
                            name: 'x_0221_quiz_app.user'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd7bf52c836b8fd0429b6260ceaad350'
                        key: {
                            sys_ui_section: {
                                id: '617bf52c836b8fd0429b6260ceaad33c'
                                key: {
                                    name: 'x_0221_quiz_app_quiz'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'audience'
                            position: '4'
                        }
                    },
                ]
            }
        }
    }
}
