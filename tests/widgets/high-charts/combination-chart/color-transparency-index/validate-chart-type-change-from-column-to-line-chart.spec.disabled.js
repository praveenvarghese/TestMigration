/*!
 * @AIMMS_FILE=models/ColorIndex/ChartTypes.aimms
 */

scenario("Validate applied class name for color and transparency ", () => {
	loadPage("Main Project/home");

	findWidget("CC")
		.getColorAndTransparencyIndexAppliedClass()
		.should.eql([
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans3",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans4",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans2",
			},
			{
				colorIndexClass: "annotation-Ord1",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord2",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord3",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord4",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord5",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord6",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord7",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord8",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord9",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord10",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord11",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
			{
				colorIndexClass: "annotation-Ord12",
				transparencyIndexClass: "annotation-Mod5Trans5",
			},
		]);
});
