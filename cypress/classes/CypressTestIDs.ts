const CypressTestIds = {
    // Toast Messages
    TOAST_ALERT_MESSAGE_SUCCESS: "toast-alert-message-success",
    TOAST_ALERT_MESSAGE_ERROR: "toast-alert-message-error",
    TOAST_ALERT_MESSAGE_WARNING: "toast-alert-message-warning",
    TOAST_ALERT_MESSAGE_INFO: "toast-alert-message-info",

    // HeaderMenu
    HEADER_MENU_HOME: "header-menu-home",
    HEADER_MENU_SCHEMA: "header-menu-schema",
    HEADER_MENU_RELATIONSHIPS: "header-menu-relationships",
    HEADER_MENU_SEARCH: "header-menu-search",
    HEADER_MENU_SEARCH_DUPLICATE: "header-menu-search-duplicate",
    HEADER_MENU_CONFIGURATION: "header-menu-configuration",
    HEADER_MENU_BUSINESS_AREA_SELECT_MENU_BUTTON:
        "header-menu-business-area-select-menu-button",
    HEADER_MENU_BUSINESS_AREA_SELECT_MENU:
        "header-menu-business-area-select-menu",

    // Configuration > VerticleMenuContent
    // NOTE: This is generated automatically for all menus
    VERTICAL_MENU_BUSINESSAREAS: "vertical-menu-configuration-businessareas",
    VERTICAL_MENU_BUSINESSAREADATA: "vertical-menu-configuration-businessareadata",
    VERTICAL_MENU_DATACLASSIFIERS: "vertical-menu-configuration-dataclassifiers",
    VERTICAL_MENU_ROLES: "vertical-menu-configuration-roles",
    VERTICAL_MENU_USERS: "vertical-menu-configuration-users",
    VERTICAL_MENU_CREDENTIALS: "vertical-menu-configuration-credentials",
    VERTICAL_MENU_SYSTEMCONNECTIONS: "vertical-menu-configuration-systemconnections",
    VERTICAL_MENU_SYSTEMKEYS: "vertical-menu-configuration-systemkeys",
    VERTICAL_MENU_CHANGEDATACAPTURE: "vertical-menu-configuration-changedatacapture",
    VERTICAL_MENU_TENANCYCUSTOMIZATION: "vertical-menu-configuration-tenancycustomization",

    // OkCancelConfirmationBox
    CONFIRMATION_BOX_OK_BUTTON: "confirmation-box-ok-button",
    CONFIRMATION_BOX_CANCEL_BUTTON: "confirmation-box-cancel-button",

    //User Signup

    USER_SIGNUP_EMAIL_INPUT: "user-signup-corporate-email-input",
    USER_SIGNUP_PASSWORD_INPUT: "user-signup-password-input",
    USER_SIGNUP_FIRST_NAME_INPUT: "user-signup-first-name-input",
    USER_SIGNUP_LAST_NAME_INPUT: "user-signup-last-name-input",
    USER_SIGUP_CHECKBOX: "user-signup-agree-terms-checkbox",
    USER_SIGNUP_SUBMIT_BUTTON: "user-signup-signup-button",

    // User Login
    USER_LOGIN_EMAIL_LINK_SENT_MESSAGE: "user-login-email-link-sent-message",
    USER_LOGIN_EMAIL_INPUT: "user-login-email-input",
    USER_LOGIN_PASSWORD_INPUT: "user-login-password-input",
    USER_LOGIN_SUBMIT_BUTTON: "user-login-submit-button",
    USER_LOGIN_FORGOT_PASSWORD_LINK: "user-login-forgot-password-link",
    USER_LOGIN_RESEND_VERIFY_EMAIL_LINK: "user-login-resend-verify-email-link",
    USER_LOGIN_NEW_USER_RADIO: "user-login-new-user-radio",
    USER_LOGIN_EXISTING_USER_RADIO: "user-login-existing-user-radio",

    // Reset Password
    USER_RESET_PASSWORD_BACKTOLOGIN_BUTTON:
        "user-reset-password-backtologin-button",
    USER_RESET_PASSWORD_FORM: "user-reset-password-form",
    USER_RESET_PASSWORD_EMAIL_INPUT: "user-reset-password-email-input",
    USER_RESET_PASSWORD_SUBMIT_BUTTON: "user-reset-password-submit-button",
    USER_RESET_PASSWORD_EMAIL_ERROR_MESSAGE:
        "user-reset-password-email-error-message",
    USER_RESET_PASSWORD_LINK_SENT_MESSAGE:
        "user-reset-password-link-sent-message",

    // Change Password
    USER_CHANGE_PASSWORD_INPUT: "user-change-password-input",
    USER_CHANGE_PASSWORD_CONFIRM_INPUT: "user-change-password-confirm-input",
    USER_CHANGE_PASSWORD_SUBMIT_BUTTON: "user-change-password-submit-button",
    USER_CHANGE_PASSWORD_ERROR_MESSAGE: "user-change-password-error-message",
    USER_CHANGE_PASSWORD_SUCCESS_MESSAGE:
        "user-change-password-success-message",

    // BusinessAreaList
    ADD_BUSINESS_AREA_BUTTON: "add-business-area-button",
    DELETE_BUSINESS_AREA_BUTTON: "delete-business-area-button",
    EDIT_BUSINESS_AREA_BUTTON: "edit-business-area-button",
    VIEW_BUSINESS_AREA_BUTTON: "view-business-area-button",
    HISTORY_BUSINESS_AREA_BUTTON: "history-business-area-button",
    ACTIVATE_BUSINESS_AREA_SWITCH: "activate-business-area-switch",


    // ManageBusinessArea
    MANAGE_BUSINESS_AREA_NAME_INPUT: "manage-business-area-name-input",
    MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT:
        "manage-business-area-description-input",
    MANAGE_BUSINESS_AREA_SAVE_BUTTON: "manage-business-area-save-button",
    MANAGE_BUSINESS_AREA_CANCEL_BUTTON: "manage-business-area-cancel-button",

    // ManageBusinessArea tabs
    MANAGE_BUSINESS_AREA_TAB_USER: "manage-business-area-tab-user",
    MANAGE_BUSINESS_AREA_TAB_CREDENTIALS: "manage-business-area-tab-credentials",
    MANAGE_BUSINESS_AREA_TAB_SYSTEM_CONNECTIONS: "manage-business-area-tab-system-connections",

    // BusinessAreaUserList
    BUSINESS_AREA_USER_SELECT: "business-area-user-select",
    ADD_BUSINESS_AREA_USER_BUTTON: "add-business-area-user-button",
    DELETE_BUSINESS_AREA_USER_BUTTON: "delete-business-area-user-button",
    ACTIVATE_BUSINESS_AREA_USER_CHECKBOX:
        "activate-business-area-user-checkbox",
    CAN_DELETE_BUSINESS_AREA_USER_CHECKBOX:
        "can-delete-business-area-user-checkbox",
    CAN_EDIT_BUSINESS_AREA_USER_CHECKBOX:
        "can-edit-business-area-user-checkbox",
    CAN_VIEW_BUSINESS_AREA_USER_CHECKBOX:
        "can-view-business-area-user-checkbox",
    CAN_ADD_BUSINESS_AREA_USER_CHECKBOX: "can-add-business-area-user-checkbox",

    //Business Area Client/Credentials list - Neeraj
    BUSINESS_AREA_CLIENT_LIST_SELECT: "business-area-client-list-select",
    BUSINESS_AREA_CLIENT_LIST_CAN_ADD_CHECKBOX: "business-area-client-list-can-add-checkbox",
    BUSINESS_AREA_CLIENT_LIST_CAN_VIEW_CHECKBOX: "business-area-client-list-can-view-checkbox",
    BUSINESS_AREA_CLIENT_LIST_CAN_EDIT_CHECKBOX: "business-area-client-list-can-edit-checkbox",
    BUSINESS_AREA_CLIENT_LIST_CAN_DEL_CHECKBOX: "business-area-client-list-can-del-checkbox",
    BUSINESS_AREA_CLIENT_LIST_ACTIVE_CHECKBOX: "business-area-client-list-active-checkbox",
    BUSINESS_AREA_CLIENT_LIST_DELETE_BUTTON: "business-area-client-list-delete-button",
    BUSINESS_AREA_CLIENT_ADD_BUTTON: "business-area-client-list-add-button",
    BUSINESS_AREA_CLIENT_LIST_TABLE: "business-area-client-list-table",

     //Business Area Data
     BUSINESS_AREA_DATA_LIST_TABLE: "business-area-data-list-table",
     BUSINESS_AREA_DATA_LIST_EDIT_BUTTON: "business-area-data-list-edit-button",
     BUSINESS_AREA_DATA_LIST_VIEW_BUTTON: "business-area-data-list-view-button",
     BUSINESS_AREA_DATA_LIST_VIEW_HISTORY_BUTTON: "business-area-data-list-view-history-button",
     BUSINESS_AREA_DATA_LIST_DELETE_BUTTON: "business-area-data-list-delete-button",
 
     BUSINESS_AREA_DATA_ADD_NEW_BUTTON: "business-area-data-add-new-button",
     MANAGE_BUSINESS_AREA_DATA_BUSINESS_AREA_NAME_SELECT: "manage-business-area-data-business-area-name-select",
     MANAGE_BUSINESS_AREA_DATA_DOMAIN_NAME_INPUT: "manage-business-area-data-domain-name-input",
     MANAGE_BUSINESS_AREA_DATA_DESCRIPTION_INPUT: "manage-business-area-data-description-input",
     MANAGE_BUSINESS_AREA_DATA_PURPOSE_INPUT: "manage-business-area-data-purpose-input",
     MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT: "manage-business-area-data-tags-select",
     MANAGE_BUSINESS_AREA_DATA_FILE_INPUT: "manage-business-area-data-file-input",
     MANAGE_BUSINESS_AREA_DATA_REPLACE_EXISTING_DATA_OPTION: "manage-business-area-data-replace-existing-data-option",
     MANAGE_BUSINESS_AREA_DATA_FIRST_ROW_IS_HEADER_CHECKBOX: "manage-business-area-data-first-row-is-header-checkbox",
     MANAGE_BUSINESS_AREA_DATA_APPEND_THE_DATA_OPTION: "manage-business-area-data-append-the-data-option",
     MANAGE_BUSINESS_AREA_DATA_CANCEL_BUTTON: "manage-business-area-data-cancel-button",
     MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON: "manage-business-area-data-save-button",
     MANAGE_BUSINESS_AREA_DATA_DOMAIN_DATA_PREVIEW_LIST: "manage-business-area-data-domain-data-preview-list",
    
        //Business Area Data
        BUSINESS_AREA_DATA_LIST_TABLE: "business-area-data-list-table",
        BUSINESS_AREA_DATA_LIST_EDIT_BUTTON: "business-area-data-list-edit-button",
        BUSINESS_AREA_DATA_LIST_VIEW_BUTTON: "business-area-data-list-view-button",
        BUSINESS_AREA_DATA_LIST_VIEW_HISTORY_BUTTON: "business-area-data-list-view-history-button",
        BUSINESS_AREA_DATA_LIST_DELETE_BUTTON: "business-area-data-list-delete-button",
    
        BUSINESS_AREA_DATA_ADD_NEW_BUTTON: "business-area-data-add-new-button",
        MANAGE_BUSINESS_AREA_DATA_BUSINESS_AREA_NAME_SELECT: "manage-business-area-data-business-area-name-select",
        MANAGE_BUSINESS_AREA_DATA_DOMAIN_NAME_INPUT: "manage-business-area-data-domain-name-input",
        MANAGE_BUSINESS_AREA_DATA_DESCRIPTION_INPUT: "manage-business-area-data-description-input",
        MANAGE_BUSINESS_AREA_DATA_PURPOSE_INPUT: "manage-business-area-data-purpose-input",
        MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT: "manage-business-area-data-tags-select",
        MANAGE_BUSINESS_AREA_DATA_FILE_INPUT: "manage-business-area-data-file-input",
        MANAGE_BUSINESS_AREA_DATA_REPLACE_DATA_OPTION: "manage-business-area-data-replace-data-option",
        //UPLOAD_SCHEMA_FIRST_ROW_CHECKBOX: "upload-schema-first-row-checkbox",
        MANAGE_BUSINESS_AREA_DATA_APPEND_DATA_OPTION: "manage-business-area-data-append-the-data-option",
        MANAGE_BUSINESS_AREA_DATA_CANCEL_BUTTON: "manage-business-area-data-cancel-button",
        MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON: "manage-business-area-data-save-button",
        MANAGE_BUSINESS_AREA_DATA_DOMAIN_DATA_PREVIEW_LIST: "manage-business-area-data-domain-data-preview-list",

    // RoleUserList
    ADD_ROLE_USER_BUTTON: "add-role-user-button",

    // Schema Page
    CREATE_NEW_SCHEMA_BUTTON: "create-new-schema-button",
    CREATE_NEW_SCHEMA_FROM_FILE_BUTTON: "create-new-schema-from-file-button",
    CREATE_NEW_SCHEMA_MANUALLY_BUTTON: "create-new-schema-manually-button",
    CREATE_NEW_SCHEMA_CLONE_BUTTON: "create-new-schema-clone-button",

    // Schema Upload
    UPLOAD_SCHEMA_FILE_INPUT: "upload-schema-file-input",
    UPLOAD_SCHEMA_FIRST_ROW_CHECKBOX: "upload-schema-first-row-checkbox",
    UPLOAD_SCHEMA_RADIO_AUTO_DETECT: "upload-schema-radio-auto-detect",
    UPLOAD_SCHEMA_RADIO_STACK_DEFINITION:
        "upload-schema-radio-stack-definition",
    UPLOAD_SCHEMA_AUTODETECT_DELIMITER_DROPDOWN:
        "upload-schema-autodetect-delimiter-dropdown",
    UPLOAD_SCHEMA_CUSTOM_DELIMITER_INPUT:
        "upload-schema-custom-delimiter-input",
    UPLOAD_SCHEMA_CANCEL_BUTTON: "upload-schema-cancel-button",
    UPLOAD_SCHEMA_NEXT_BUTTON: "upload-schema-next-button",

    // Manage Schema Model
    MANAGE_SCHEMA_MODEL_NAME_INPUT: "manage-schema-model-name-input",
    MANAGE_SCHEMA_MODEL_DESCRIPTION_INPUT:
        "manage-schema-model-description-input",
    MANAGE_SCHEMA_MODEL_CANCEL_BUTTON: "manage-schema-model-cancel-button",
    MANAGE_SCHEMA_MODEL_SAVE_AS_DRAFT_BUTTON:
        "manage-schema-model-save-as-draft-button",
    MANAGE_SCHEMA_MODEL_SAVE_PUBLISH_BUTTON:
        "manage-schema-model-save-publish-button",
    MANAGE_SCHEMA_MODEL_EXPORT_BUTTON: "manage-schema-model-export-button",
    UPLOAD_SCHEMA_FILE_INPUT_ICON_BUTTON: "upload-schema-file-input-icon-button",
    
    // Schema Model List
    SCHEMA_LIST_EDIT_BUTTON: "schema-list-edit-button",
    SCHEMA_LIST_VIEW_BUTTON: "schema-list-view-button",
    SCHEMA_LIST_CHANGE_HISTORY_BUTTON: "schema-list-change-history-button",
    SCHEMA_LIST_VISUALISE_RELATIONSHIPS_BUTTON:
        "schema-list-visualise-relationships-button",
    SCHEMA_LIST_DELETE_BUTTON: "schema-list-delete-button",
    SCHEMA_LIST_SHARING_CHECKBOX: "schema-list-sharing-checkbox",
    SCHEMA_LIST_TABLE: "schema-list-table",

    // Schema Model Field List
    SCHEMA_FIELD_ISPRIMARY_CHECKBOX: "schema-field-isprimary-checkbox",
    SCHEMA_FIELD_ISSORTKEY_CHECKBOX: "schema-field-issortkey-checkbox",
    SCHEMA_FIELD_ISACTIVE_CHECKBOX: "schema-field-isactive-checkbox",
    SCHEMA_FIELD_ISREQUIRED_CHECKBOX: "schema-field-isrequired-checkbox",
    SCHEMA_FIELD_NAME_INPUT: "schema-field-name-input",
    SCHEMA_FIELD_DESCRIPTION_INPUT: "schema-field-description-input",
    SCHEMA_FIELD_DATATYPE_SELECT: "schema-field-datatype-select",
    SCHEMA_FIELD_DELETE_BUTTON: "schema-field-delete-button",
    SCHEMA_FIELD_ADD_BUTTON: "schema-field-add-button",
    SCHEMA_FIELD_TABLE: "schema-field-table",

    SCHEMA_CREATE_NEW_SCHEMA_CLONE_SCHEMA_TREE: "schema-create-new-schema-clone-schema-tree",
    SCHEMA_CREATE_NEW_SCHEMA_CLONE_SCHEMA_NAME_INPUT: "schema-create-new-schema-clone-schema-name-input",
    SCHEMA_CREATE_NEW_SCHEMA_CLONE_SCHEMA_DESC_INPUT: "schema-create-new-schema-clone-schema-desc-input",
    SCHEMA_CREATE_NEW_SCHEMA_CLONE_SCHEMA_CREATE_BUTTON: "schema-create-new-schema-clone-schema-create-button",
    

    // Min/Max Length property
    SCHEMA_MAX_LENGTH_PROPERTY_INPUT: "schema-max-length-property-input",
    SCHEMA_MIN_LENGTH_PROPERTY_INPUT: "schema-min-length-property-input",

    // Multi Value property
    SCHEMA_MULTIVALUE_PROPERTY_CHECKBOX: "schema-multivalue-property-checkbox",

    // PII property
    SCHEMA_PII_PROPERTY_CHECKBOX: "schema-pii-property-checkbox",

    // Classifier property
    SCHEMA_CLASSIFIERS_PROPERTY_SELECT: "schema-classifier-property-select",

    //Users Page
    USERS_USERSLIST_TABLE: "users-userlist-table",
    USERS_ADD_USER_BUTTON: "users-add-user-button",
    USERS_USERSLIST_EDIT_BUTTON: "users-userlist-edit-button",
    USERS_USERSLIST_VIEW_BUTTON: "users-userlist--view-button",
    USERS_USERSLIST_HISTORY_BUTTON: "users-userlist-history-button",
    USERS_USERSLIST_ACTIVE_SWITCH: "users-userlist-active-switch",
    USERS_SAVE_BUTTON: "users-save-button",
    USERS_CANCEL_BUTTON: "users-cancel-button",
    USERS_RESETPASSWORD_BUTTON: "users-resetpassword-button",
    USERS_EMAIL_INPUT: "users-email-input",
    USERS_FIRST_NAME_INPUT: "users-first-name-input",
    USERS_LAST_NAME_INPUT: "users-last-name-input",


    //Data Tags
    
    DATATAGS_DATATAGLIST_TABLE: "datatags-datataglist-table",
    DATATAGS_ADD_DATATAG_BUTTON: "datatags-add-datatag-button",
    DATATAGS_DATATAGLIST_EDIT_BUTTON: "datatags-datataglist-edit-button",
    DATATAGS_DATATAGLIST_VIEW_BUTTON: "datatags-datataglist-view-button",
    DATATAGS_DATATAGLIST_HISTORY_BUTTON: "datatags-datataglist-history-button",
    DATATAGS_DATATAGLIST_DELETE_SWITCH: "datatags-datataglist-delete-button",
    DATATAGS_DATATAG_SAVE_BUTTON: "datatags-save-button",
    DATATAGS_DATATAG_CANCEL_BUTTON: "datatags-cancel-button",
    DATATAGS_DATATAG_BUSINESSAREA_SELECT: "datatags-datatag-businessarea-select",
    DATATAGS_DATATAG_NAME_INPUT: "datatags-datatag-name-input",
    DATATAGS_DATATAG_DESCRIPTION_INPUT: "datatags-datatag-description-input",

    // Tenancy Customization
    TENANCY_CUSTOMIZATION_TITLE_TEXT: "tenancy-customization-title-text",
    TENANCY_CUSTOMIZATION_TEXT_INPUT_1: "tenancy-customization-text-input-1",
    TENANCY_CUSTOMIZATION_TEXT_INPUT_2: "tenancy-customization-text-input-2",
    TENANCY_CUSTOMIZATION_IMAGE_INPUT: "tenancy-customization-image-input",
    TENANCY_CUSTOMIZATION_IMAGE_PREVIEW: "tenancy-customization-image-preview",
    TENANCY_CUSTOMIZATION_COLOR_PALETTE_1:
        "tenancy-customization-color-palette-1",
    TENANCY_CUSTOMIZATION_COLOR_PALETTE_2:
        "tenancy-customization-color-palette-2",
    TENANCY_CUSTOMIZATION_COLOR_PALETTE_3:
        "tenancy-customization-color-palette-3",
    TENANCY_CUSTOMIZATION_COLOR_PALETTE_4:
        "tenancy-customization-color-palette-4",
    TENANCY_CUSTOMIZATION_COLOR_PALETTE_5:
        "tenancy-customization-color-palette-5",
    TENANCY_CUSTOMIZATION_COLOR_PALETTE_6:
        "tenancy-customization-color-palette-6",
    TENANCY_CUSTOMIZATION_COLOR_PALETTE_7:
        "tenancy-customization-color-palette-7",
    TENANCY_CUSTOMIZATION_COLOR_PALETTE_8:
        "tenancy-customization-color-palette-8",
    TENANCY_CUSTOMIZATION_SUBMIT_BUTTON: "tenancy-customization-submit-button",
    TENANCY_CUSTOMIZATION_CANCEL_BUTTON: "tenancy-customization-cancel-button",
    TENANCY_CUSTOMIZATION_RESET_BUTTON: "tenancy-customization-reset-button",
    TENANCY_CUSTOMIZATION_GENERATE_PREVIEW_BUTTON: "tenancy-customization-generate-preview-button",
    TENANCY_CUSTOMIZATION_PREVIEW_HEADER_FOOTER:
        "tenancy-customization-preview-header-footer",
    TENANCY_CUSTOMIZATION_PREVIEW_NAVIGATION_BAR:
        "tenancy-customization-preview-navigation-bar",
    TENANCY_CUSTOMIZATION_PREVIEW_SELECTED_HEADER:
        "tenancy-customization-preview-selected-header",
    TENANCY_CUSTOMIZATION_PREVIEW_PRIMARY_BUTTONS:
        "tenancy-customization-preview-primary-buttons",
    TENANCY_CUSTOMIZATION_PREVIEW_FORM_BACKGROUND:
        "tenancy-customization-preview-form-background",
    TENANCY_CUSTOMIZATION_PREVIEW_SECONDARY_BUTTONS:
        "tenancy-customization-preview-secondary-buttons",
    TENANCY_CUSTOMIZATION_PREVIEW_SELECTED_ROW:
        "tenancy-customization-preview-selected-row",
    TENANCY_CUSTOMIZATION_PREVIEW_LABEL_COLOR:
        "tenancy-customization-preview-label-color",
  
    //common objects
    COMMON_OBJECTS_EVENT_LIST_TABLE: "common-objects-event-list-table",
    COMMON_OBJECTS_REVISIONS_LIST_TABLE: "common-objects-revesions-list-table"
};

export default CypressTestIds;
