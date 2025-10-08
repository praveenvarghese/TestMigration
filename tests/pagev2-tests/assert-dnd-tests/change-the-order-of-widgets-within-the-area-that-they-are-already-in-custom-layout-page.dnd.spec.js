/*!
 * @AIMMS_FILE=models/PageV2/Vliegtuigjes/Vliegtuigjes.aimms
 * @INTERACTION_MODE=dnd
 */

scenario(
	"Change the order of widgets within the area that they are already in in custom layout page",
	() => {
		loadPage("Main Project/Test Page/Custom Grid Page?_aimms_only_persistence.write=true");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Aantal Hoofdstukken", "BC AantalWoorden"] },
				{ areaName: "Area B", widgets: ["PC AantalHoofdstukken"] },
				{ areaName: "Area C", widgets: ["Booksdata"] },
				{ areaName: "Area D", widgets: ["Flags"] },
				{ areaName: "Area E", widgets: ["No widgets in this area"] },
				{ areaName: "Area F", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("custom_grid_page")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["Aantal Hoofdstukken", "BC AantalWoorden"] },
				{ areaName: "Area B", widgets: ["PC AantalHoofdstukken"] },
				{ areaName: "Area C", widgets: ["Booksdata"] },
				{ areaName: "Area D", widgets: ["Flags"] },
				{ areaName: "Area E", widgets: [] },
				{ areaName: "Area F", widgets: [] },
			]);

		getPageConfigurator()
			.dragWidget("BC AantalWoorden")
			.dropBefore("Aantal Hoofdstukken");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["BC AantalWoorden", "Aantal Hoofdstukken"] },
				{ areaName: "Area B", widgets: ["PC AantalHoofdstukken"] },
				{ areaName: "Area C", widgets: ["Booksdata"] },
				{ areaName: "Area D", widgets: ["Flags"] },
				{ areaName: "Area E", widgets: ["No widgets in this area"] },
				{ areaName: "Area F", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("custom_grid_page")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["BC AantalWoorden", "Aantal Hoofdstukken"] },
				{ areaName: "Area B", widgets: ["PC AantalHoofdstukken"] },
				{ areaName: "Area C", widgets: ["Booksdata"] },
				{ areaName: "Area D", widgets: ["Flags"] },
				{ areaName: "Area E", widgets: [] },
				{ areaName: "Area F", widgets: [] },
			]);

		getPageMenu().navigateToPage("Main Project/home");

		getPageMenu().navigateToPage("Main Project/Test Page/Custom Grid Page");

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["BC AantalWoorden", "Aantal Hoofdstukken"] },
				{ areaName: "Area B", widgets: ["PC AantalHoofdstukken"] },
				{ areaName: "Area C", widgets: ["Booksdata"] },
				{ areaName: "Area D", widgets: ["Flags"] },
				{ areaName: "Area E", widgets: ["No widgets in this area"] },
				{ areaName: "Area F", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("custom_grid_page")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["BC AantalWoorden", "Aantal Hoofdstukken"] },
				{ areaName: "Area B", widgets: ["PC AantalHoofdstukken"] },
				{ areaName: "Area C", widgets: ["Booksdata"] },
				{ areaName: "Area D", widgets: ["Flags"] },
				{ areaName: "Area E", widgets: [] },
				{ areaName: "Area F", widgets: [] },
			]);

		pageRefresh();

		openPageConfigurator()
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["BC AantalWoorden", "Aantal Hoofdstukken"] },
				{ areaName: "Area B", widgets: ["PC AantalHoofdstukken"] },
				{ areaName: "Area C", widgets: ["Booksdata"] },
				{ areaName: "Area D", widgets: ["Flags"] },
				{ areaName: "Area E", widgets: ["No widgets in this area"] },
				{ areaName: "Area F", widgets: ["No widgets in this area"] },
				{ areaName: "Unassigned widgets", widgets: ["No widgets in this area"] },
			]);

		findWidget("custom_grid_page")
			.getWidgetAreas()
			.should.include.something.like([
				{ areaName: "Area A", widgets: ["BC AantalWoorden", "Aantal Hoofdstukken"] },
				{ areaName: "Area B", widgets: ["PC AantalHoofdstukken"] },
				{ areaName: "Area C", widgets: ["Booksdata"] },
				{ areaName: "Area D", widgets: ["Flags"] },
				{ areaName: "Area E", widgets: [] },
				{ areaName: "Area F", widgets: [] },
			]);
	}
);
