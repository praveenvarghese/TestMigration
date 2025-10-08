/*!
 * @AIMMS_FILE=models/Bugs/GL00832-TravelingSalesman/TravelingSalesman.aimms
 */

scenario(
	"Hover on header of active status bar message with custom HTMl tooltip. Assert tooltip shown and the text.",
	() => {
		loadPage("Main Project/home");

		getStatusBar()
			.getStatusBarMessageDetails(0)
			.hoverOnIcon(5, 5);
		//	.hoverOnHeader(5, 5);

		// Assert tooltip is shown and the text on hover of 1th Status Bar message
		findWidget("home").getTooltip().should.exist;
		findWidget("home")
			.getTooltip()
			.should.contain(
				".nok::before {content:''; display:inline-block; width:16px; height:16px; background:Red; border-radius:16px;}.ok::before {content:''; display:inline-block; width:16px; height:16px; background:Green; border-radius:16px;}.alerta::before {content:''; display:inline-block; width:16px; height:16px; background:DarkOrange; border-radius:16px;}Status de Consistências de Dados: Dados verificados Existem inconsistências de erro nos dados Existem inconsistências de alerta nos dadosAo Pressionar : Checar consistências de todas as telas"
			);
	}
);
