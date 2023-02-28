const ETS_CF_DATA = [{
	"title": "Quotation form",
	"active": true,
	"form_content": {
		"type_form": "basic",
		"info": {
			"alignment_description": "left",
			"alignment_title": "left",
			"bold_title": true,
			"description": "",
			"display_description_on_store": false,
			"display_title_on_store": false,
			"title": "Quotation form",
			"uppercase_title": true
		},
		"decoration": [{
			"background_position": "center",
			"background_size": "auto",
			"btn_background_color": "#fe8369",
			"btn_background_hover_color": "#1c1c1c",
			"btn_submit_position": "left",
			"btn_text_hover_color": "#ffffff",
			"btn_text_submit_color": "#ffffff",
			"enable_background_image": false,
			"form_background_color": "",
			"form_decoration_image": "",
			"form_description_color": "",
			"form_padding": "5",
			"form_width": "801",
			"label_color": "",
			"other_color_1": "",
			"other_color_2": "",
			"radius_pixel": 5,
			"repeat_image": "no-repeat",
			"round_corner_input_field": false,
			"text_group": 1,
			"text_group_btn_float": 1,
			"text_group_btn_popup": 1,
			"text_group_button_style": 1,
			"text_group_form_style": 1,
			"title_color": ""
		}],
		"thank_page": {
			"how_to_display": false,
			"thank_you_content": "Your mod request has been received.\nOur team has received your modification request for plan   and will get back to you shortly with next steps."
		},
		"setting": {
			"enable_form": true,
			"mail_host": "app"
		},
		"buttonDecoration": [],
		"form": [
			[{
				"width": 12,
				"fields": [{
					"key": "text",
					"img": "https:\/\/i.ibb.co\/yFg1JJB\/ip-text.png",
					"label": "Text",
					"disabled": false,
					"options": {
						"default_value": "",
						"description": "",
						"is_contact_name": false,
						"label": "",
						"max_character": "",
						"name": "First-Name",
						"required": true,
						"placeholder": "Your name"
					}
				}, {
					"key": "email",
					"img": "https:\/\/i.ibb.co\/7bZxQ9H\/ip-email.png",
					"label": "Email",
					"disabled": false,
					"group": "",
					"options": {
						"label": "",
						"required": true,
						"name": "email-2",
						"default_value": "",
						"placeholder": "Email",
						"use_customer_email_as_default": false,
						"description": "",
						"is_contact_email": true
					}
				}]
			}],
			[{
				"width": 6,
				"fields": [{
					"key": "text",
					"img": "https:\/\/i.ibb.co\/yFg1JJB\/ip-text.png",
					"label": "Text",
					"disabled": false,
					"group": "",
					"options": {
						"label": "",
						"required": false,
						"name": "Zip-Code",
						"default_value": "",
						"placeholder": "Zip Code",
						"description": "",
						"max_character": "5",
						"is_contact_name": false
					}
				}]
			}, {
				"width": 6,
				"fields": [{
					"key": "phone",
					"img": "https:\/\/i.ibb.co\/zPYyXjV\/ip-tel.png",
					"label": "Phone",
					"disabled": false,
					"group": "",
					"options": {
						"label": "",
						"required": true,
						"name": "phone-5",
						"default_value": "",
						"use_customer_phone_number_as_default": false,
						"placeholder": "Telephone",
						"description": ""
					}
				}]
			}],
			[{
				"width": 12,
				"fields": [{
					"key": "text",
					"img": "https:\/\/i.ibb.co\/yFg1JJB\/ip-text.png",
					"label": "Text",
					"disabled": false,
					"group": "",
					"options": {
						"label": "Requested Foundation (if different from stock foundations)",
						"required": false,
						"name": "Requested-Foundation",
						"default_value": "",
						"placeholder": "Slab",
						"description": "",
						"max_character": "",
						"is_contact_name": false
					}
				}]
			}],
			[{
				"width": 12,
				"fields": [{
					"key": "textarea",
					"img": "https:\/\/i.ibb.co\/zZ4FzYS\/ip-textarea.png",
					"label": "Textarea",
					"disabled": false,
					"group": "",
					"options": {
						"label": "",
						"required": false,
						"name": "Requested-Modifications",
						"enable_rich_text": false,
						"default_value": "",
						"placeholder": "Requested Modifications",
						"description": "",
						"max_character": "",
						"rows": "3"
					}
				}, {
					"key": "html",
					"img": "https:\/\/i.ibb.co\/2dpvZrD\/ip-html.png",
					"label": "HTML",
					"disabled": false,
					"group": "",
					"options": {
						"label": "",
						"name": "html-1",
						"html": "<p>If you wish to send a sketch along with your request, you have 2 options:<\/p>\n<ul class=\"lis_name\"><li>Attach the file with your request below (limit files to 250MB)<\/li>\n<li>Email it directly to us at sales@garrellassociates.com (include your name and the plan number)<\/li>\n<\/ul>"
					}
				}, {
					"key": "file",
					"img": "https:\/\/i.ibb.co\/HxvVJbH\/ip-file.png",
					"label": "File",
					"disabled": false,
					"group": "",
					"options": {
						"label": "",
						"required": false,
						"name": "Image",
						"file_size": 10,
						"acceptable_file": [".pdf", ".jpg", ".png", ".gif", ".doc", ".docx", ".csv", ".xls", ".xlsx", ".txt", ".zip", ".rar"],
						"description": ""
					}
				}, {
					"key": "reCaptcha",
					"img": "https:\/\/i.ibb.co\/K7WnM8J\/ip-recaptcha.png",
					"label": "reCaptcha",
					"disabled": false,
					"configUrl": "https:\/\/contact-form.etssoft.net\/app\/settings?tab-active=reCaptcha",
					"group": "",
					"options": {
						"label": "",
						"name": "reCaptcha-4",
						"size": "normal",
						"theme": "light",
						"description": ""
					}
				}]
			}],
            [],
			[{
				"width": 12,
				"fields": [{
					"key": "text",
					"img": "https:\/\/i.ibb.co\/yFg1JJB\/ip-text.png",
					"label": "Text",
					"disabled": false,
					"group": "",
					"options": {
						"label": "",
						"required": false,
						"name": "plan-d",
						"default_value": "",
						"placeholder": "Plan-id",
						"description": "",
						"max_character": "",
						"is_contact_name": false
					}
				}]
			}]
		],
		"step_multiple_form": [],
		"btn_submit": {
			"btn_custom_icon": "",
			"btn_icon": "<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 512 512\"><path d=\"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z\"\/><\/svg>",
			"btn_label": "Submit",
			"btn_type": "label",
			"btn_submit_position": "center"
		},
		"btn_next": {
			"btn_custom_icon": "",
			"btn_icon": "step_forward",
			"btn_label": "NEXT",
			"btn_type": "label_icon"
		},
		"btn_previous": {
			"btn_custom_icon": "",
			"btn_icon": "backward",
			"btn_label": "PREVIOUS",
			"btn_type": "label_icon"
		},
		"captchaForm": {
			"indexInput": {
				"row": 4,
				"col": 0,
				"input": 3
			},
			"options": {
				"label": "",
				"name": "reCaptcha-4",
				"size": "normal",
				"theme": "light",
				"description": ""
			}
		},
		"dataSettingHost": null
	},
	"sort_order": 2076,
	"shortcode": "H5m",
	"updated_at": "2022-06-19T10:17:15.863000Z",
	"created_at": "2022-03-25T12:12:33.381000Z",
	"id": "623db1b1b5076c324a6e95c4"
}, {
	"title": "Contact us",
	"active": true,
	"form_content": {
		"type_form": "basic",
		"info": {
			"alignment_description": "left",
			"alignment_title": "left",
			"bold_title": true,
			"description": "Questions on a plan? We're here to help. Fill out the form below and we'll get you answers.",
			"display_description_on_store": true,
			"display_title_on_store": true,
			"title": "Contact us",
			"uppercase_title": false
		},
		"decoration": [{
			"background_position": "center",
			"background_size": "auto",
			"btn_background_color": "#2c2c2c",
			"btn_background_hover_color": "#1c1c1c",
			"btn_submit_position": "right",
			"btn_text_hover_color": "#ffffff",
			"btn_text_submit_color": "#ffffff",
			"enable_background_image": false,
			"form_background_color": "",
			"form_decoration_image": "",
			"form_description_color": "",
			"form_padding": "30",
			"form_width": "800",
			"label_color": "",
			"other_color_1": "",
			"other_color_2": "",
			"radius_pixel": 5,
			"repeat_image": "no-repeat",
			"round_corner_input_field": false,
			"text_group": 1,
			"text_group_btn_float": 1,
			"text_group_btn_popup": 1,
			"text_group_button_style": 1,
			"text_group_form_style": 1,
			"title_color": ""
		}],
		"thank_page": {
			"how_to_display": true,
			"thank_you_content": "Thank you for getting in touch!\nWe will look over your message and get back to you by tomorrow. In the meantime, you can check the FAQ section, look over our new product collection or browse through our latest blog posts"
		},
		"setting": {
			"enable_form": true,
			"isChangeHost": true,
			"mail_host": "app"
		},
		"buttonDecoration": [],
		"form": [
			[{
				"width": 6,
				"fields": [{
					"disabled": false,
					"img": "https:\/\/i.ibb.co\/yFg1JJB\/ip-text.png",
					"key": "text",
					"label": "Text",
					"options": {
						"default_value": "",
						"description": "",
						"is_contact_name": true,
						"label": "Name",
						"max_character": "",
						"name": "text-6",
						"placeholder": "",
						"required": true
					}
				}]
			}, {
				"width": 6,
				"fields": [{
					"key": "text",
					"img": "https:\/\/i.ibb.co\/yFg1JJB\/ip-text.png",
					"label": "Text",
					"disabled": false,
					"group": "",
					"options": {
						"label": "Plan ID",
						"required": false,
						"name": "plan_id",
						"default_value": "",
						"placeholder": "",
						"description": "",
						"max_character": "",
						"is_contact_name": false
					}
				}]
			}],
			[{
				"width": 6,
				"fields": [{
					"disabled": false,
					"img": "https:\/\/i.ibb.co\/7bZxQ9H\/ip-email.png",
					"key": "email",
					"label": "Email",
					"options": {
						"default_value": "",
						"description": "",
						"is_contact_email": true,
						"label": "Email",
						"name": "email-2",
						"placeholder": "",
						"required": true,
						"use_customer_email_as_default": false
					}
				}]
			}, {
				"width": 6,
				"fields": [{
					"disabled": false,
					"img": "https:\/\/i.ibb.co\/zPYyXjV\/ip-tel.png",
					"key": "phone",
					"label": "Phone",
					"options": {
						"default_value": "",
						"description": "",
						"label": "Phone",
						"name": "phone-3",
						"placeholder": "",
						"required": false,
						"use_customer_phone_number_as_default": false
					}
				}]
			}],
			[{
				"width": 12,
				"fields": [{
					"disabled": false,
					"img": "https:\/\/i.ibb.co\/zZ4FzYS\/ip-textarea.png",
					"key": "textarea",
					"label": "Textarea",
					"options": {
						"default_value": "",
						"description": "",
						"enable_rich_text": false,
						"label": "Message",
						"max_character": "",
						"name": "textarea-4",
						"placeholder": "",
						"required": true,
						"rows": 5
					}
				}]
			}],
			[{
				"width": 12,
				"fields": [{
					"key": "reCaptcha",
					"img": "https:\/\/i.ibb.co\/K7WnM8J\/ip-recaptcha.png",
					"label": "reCaptcha",
					"disabled": false,
					"configUrl": "https:\/\/contact-form.etssoft.net\/app\/settings?tab-active=reCaptcha",
					"group": "",
					"options": {
						"label": "",
						"name": "reCaptcha-7",
						"size": "normal",
						"theme": "light",
						"description": ""
					}
				}]
			}]
		],
		"step_multiple_form": [],
		"btn_submit": {
			"btn_custom_icon": "",
			"btn_icon": "<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 512 512\"><path d=\"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z\"\/><\/svg>",
			"btn_label": "SEND",
			"btn_type": "label_icon"
		},
		"btn_next": {
			"btn_custom_icon": "",
			"btn_icon": "step_forward",
			"btn_label": "NEXT",
			"btn_type": "label_icon"
		},
		"btn_previous": {
			"btn_custom_icon": "",
			"btn_icon": "backward",
			"btn_label": "PREVIOUS",
			"btn_type": "label_icon"
		},
		"captchaForm": {
			"indexInput": {
				"row": 3,
				"col": 0,
				"input": 0
			},
			"options": {
				"label": "",
				"name": "reCaptcha-7",
				"size": "normal",
				"theme": "light",
				"description": ""
			}
		},
		"dataSettingHost": null
	},
	"sort_order": 2638,
	"shortcode": "RYh",
	"updated_at": "2022-06-19T10:18:11.986000Z",
	"created_at": "2022-06-16T20:49:01.753000Z",
	"id": "62ab973d45b1b570060e54aa"
}];
const ETS_CF_CONFIG = {
	"recaptcha": {
		"enable": true,
		"type": "v2",
		"site_key_v2": "6LfSrHogAAAAAHW91ipaOun1IIT3sECTNDTJGMPo",
		"site_key_v3": null,
		"language": "en-GB"
	},
	"translations": {
		"alert_info": "You can edit notification messages used in various situations here.",
		"translation_field_4": "You must accept the terms and conditions before sending your message.",
		"translation_field_5": "The field is required.",
		"translation_field_7": "The field is invalid",
		"translation_field_8": "Verify that you are not robot",
		"translation_field_12": "Max file size: 10 Mb. Accepted formats: {acceptable_file _types}"
	}
};
const ETS_CF_BASE_URL = "https://contact-form.etssoft.net";
const ETS_CF_SHOP_DOMAIN = "garrellassociates.myshopify.com";
const ETS_CF_ENABLE = 0;