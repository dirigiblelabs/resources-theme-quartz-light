/*
 * Copyright (c) 2010-2021 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
exports.getTheme = function () {
	return {
		'id': 'quartz-light',
		'module': 'theme-quartz-light',
		'name': 'Quartz Light',
		'type': 'light',
		'version': 4,
		'oldThemeId': 'fiori',
		'links': [
			'/webjars/sap-theming__theming-base-content/11.1.39/content/Base/baseLib/sap_fiori_3/css_variables.css',
			'/webjars/fundamental-styles/0.23.0/dist/theming/sap_fiori_3.css',
			'/webjars/fundamental-styles/0.23.0/dist/scrollbar.css' // Temporary
		]
	};
};
