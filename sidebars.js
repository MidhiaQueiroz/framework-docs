const sidebars = {
	docs: [
		"intro",
		{
			type: "category",
			label: "Getting Started",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: [
				{
					type: "category",
					label: "Installation",
					link: {
						type: "generated-index",
					},
					collapsed: false,
					items: [
						"getting-started/installation/video-guide",
						"getting-started/installation/install_prereqs",
						"getting-started/installation/install_with_pipenv",
						"getting-started/installation/install_with_conda",
					],
				},
				"getting-started/create-app",
			],
		},
		{
			type: "category",
			label: "Component Reference",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: [
				{
					type: "category",
					label: "Basics",
					link: {
						type: "generated-index",
					},
					collapsed: false,
					items: ["comp-reference/basics/upload"],
				},
				{
					type: "category",
					label: "Data",
					link: {
						type: "generated-index",
					},
					collapsed: false,
					items: [
						"comp-reference/charts/area-chart",
						"comp-reference/charts/bar-chart",
						"comp-reference/charts/line-chart",
						"comp-reference/charts/scatter-chart",
						"comp-reference/charts/histogram-chart",
					],
				},
			],
		},
		"dev-flow-existing-proj",
		{
			type: "category",
			label: "How-to guides [frontend]",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: [
				{
					type: "category",
					label: "Page",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						"guides-frontend/page/add-page",
						"guides-frontend/page/edit-page-details",
						"guides-frontend/page/delete-page",
					],
				},
				{
					type: "category",
					label: "Component",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: ["guides-frontend/component/add-component"],
				},
				{
					type: "category",
					label: "Template",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						"guides-frontend/template/add-template",
						"guides-frontend/template/use-template",
					],
				},
				{
					type: "category",
					label: "Asset",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						"guides-frontend/asset/add-bkg-img",
						"guides-frontend/asset/add-static-asset",
					],
				},
				{
					type: "category",
					label: "Deploy app",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						"guides-frontend/deploy-app/deploy-using-docker",
						"guides-frontend/deploy-app/deploy-manual",
					],
				},
				"guides-frontend/guide-publish",
				"guides-frontend/guide-breakpoint",
			],
		},
		{
			type: "category",
			label: "Concepts of visual editor",
			link: {
				type: "generated-index",
				description: "Add a labeled picture with names of all icons.",
			},
			collapsed: true,
			items: [
				"concepts-visual-editor/page-manager",
				"concepts-visual-editor/component-manager",
				"concepts-visual-editor/template-manager",
				"concepts-visual-editor/breakpoints",
				"concepts-visual-editor/publish-app",
				"concepts-visual-editor/custom-panel",
				"concepts-visual-editor/actions-panel",
			],
		},
		{
			type: "category",
			label: "Concepts of Python backend",
			link: {
				type: "generated-index",
			},
			collapsed: true,
			items: [
				"concepts-backend/api-structure",
				"concepts-backend/intellisense",
			],
		},
	],
};
module.exports = sidebars;
