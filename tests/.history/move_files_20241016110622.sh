#!/bin/bash

# Specify the destination folder where files are currently located
destination_folder="playwright-failing-tests"

# List of files with their original paths (without commas)
files=(
  'widgets/list-widget/interactions/maximize-the-list-widget-and-assert-action-on-click-of-list-item.spec.js',
  'selectionbox/selectionbox-big-box-upon-creation.dnd.spec.js',
   'widget-named-views/template-views/change-option-in-view-from-now-on-that-option-will-not-listen-to-template.spec.js',
  'xtra-page-scenarios/anatomy/home/demo.spec.js',
  'widget-named-views/template-views/change-a-option-per-template-and-validate-these-changes-are-reflected-in-derived-views.spec.js',
  'customer-models/exxon-mobil/c4125.spec.js',
  'widget-named-views/template-views/change-option-in-view-from-now-on-that-option-will-not-listen-to-template.spec.js',
  'xtra-page-scenarios/anatomy/home/demo.spec.js',
  'bugs/GLc4322-legend-error.spec.js',
  'widgets/table/copy-paste/copy-paste-from-classic-page-to-a-grid-page.dnd.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/hidden-tests/through-identifier/validate-hidden-fixed-widgets-when-toggled-through-identifier-column-gl-part2.spec.js',
  'customer-models/lineas-ibp-tests/scenario-comparision-overview-page-tests.spec.js',
  'widgets/table/copy-paste/copy-paste-multiline-strings.dnd.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-identifier/validate-hidden-compact-scalar-widgets-when-toggled-through-identifier-column-gl-part1.spec.js',
  'widgets/gantt/basic/hover-and-select/ganttchart-full-screen-hover-and-select.spec.js',
  'widgets/table/copy-paste/copy-paste-with-thresholds.dnd.spec.js',
  'widgets/diagram-widget/nodes/add-a-node-check-model-data.spec.js',
  'customer-models/vion/Vion.Calculations.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-identifier/validate-hidden-compact-scalar-widgets-when-toggled-through-identifier-column-gl-part2.spec.js',
  'widgets/table/search/search-and-find-feature-test-9.spec.js',
  'new-actions/assert-item-actions/on-bubble-chart/on-dialog-part1.spec.js',
  'widgets/table/excel-download/validate-download-excel-for-different-type-of-data-part1.spec.js',
  'widgets/map-v3/assert-tooltips/on-hover-of-arc-label/with-tooltip-annotation-and-dynamic-arc-setting-on.spec.js',
   'pagev2-tests/hidden-compact-widget-tests/hidden-tests/through-identifier/validate-hidden-fixed-widgets-when-toggled-through-identifier-column-gl-part1.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-literal/validate-hidden-compact-scalar-widgets-when-toggled-through-literal-column-gl-part1.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-literal/validate-hidden-compact-scalar-widgets-when-toggled-through-literal-column-gl-part2.spec.js',
  'widgets/table/copy-paste/validate-error-message-on-copy-paste-of-invalid-values-in-table-side-panel-page.dnd.spec.js',
  'pre-release-tests/Heineken.calculation.spec.js',
  'widgets/table/basic/sorting.spec.js',
  'application-extensions/status-bar/add-edit-delete/on-updating-status-bar-info.spec.js',
  'export-to-image-button/page/pageV1/on-pagev1-click-and-assert-file-downloaded.spec.js',
  'new-actions/assert-item-actions/on-table/assert-behaviour/validate-item-action-by-scrolling-in-sidepanel-page.spec.js',
  'bugs/GL1058-saving-pivot-in-single-cube.spec.js',
  'widgets/table/search/search-and-find-feature-test-4.spec.js',
  'bugs/5214-selectionbox.option-not-accesable-issue.spec.js',
  'widget-named-views/withLiteral/validate-download-excel-for-named-view-table.spec.js',
  'pagev2-tests/bug-fixes-e2e/add-selectionboxv2-to-new-grid-page-3216.dnd.spec.js',
  'widgets/high-charts/combination-chart/column-chart/combination-chart-bars-data/validate-threshold-in-combination-chart.spec.js',
  'widgets/map-v3/arc-other-features/arc-label/arc-label-option-via-toggle-tests.spec.js',
  'widgets/table/filters/sorting-when-filter-applied/validate-sorting-option-not-displayed-for-topn-filter.spec.js',
  'new-actions/assert-item-actions/on-linechart/create-widget-add-details-and-assert-item-actions.spec.js',
  'widget-named-views/inheritance-indicator-icons/bug-4856-test.spec.js',
  'widgets/table/copy-paste/copy-paste-on-different-page.dnd.spec.js',
  'widgets/table/copy-paste/validate-copy-paste-on-table-side-panel-page.dnd.spec.js',
  'widgets/linechart/advanced/area-tests/linechart-chart-area-item-action-tests.spec.js',
  'widgets/diagram-widget/arcs/validate-no-arc-if-domain-condition-false.spec.js',
  'workflow-react/workflow-sublevels/workflow-configuration-validations/validate-dialogpage-as-pageid-in-workflow-config.spec.js',
  'widgets/table/excel-download/validate-download-excel-for-different-type-of-data-part2.spec.js',
  'workflow-react/workfow-pagev2/validate-workflow-steps-and-widgets-displayed-for-different-pagev2-pages.spec.js',
  'widgets/text/creation-deletion-editing-of-text-widget-tests-in-normal-page.spec.js',
   'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-literal/validate-hidden-compact-scalar-widgets-when-toggled-through-literal-column-gl-part2.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-identifier/validate-hidden-compact-scalar-widgets-when-toggled-through-identifier-column-gl-part1.spec.js',
  'pagev2-tests/hidden-compact-widget-tests/compact-scalar/through-literal/validate-hidden-compact-scalar-widgets-when-toggled-through-literal-column-gl-part1.spec.js',
  'bugs/GL4270-pasting-into-read-only-cells.dnd.spec.js',
  'widgets/table/excel-download/validate-download-excel-in-sidepanel-dialog-page.spec.js',
  'widgets/table/copy-paste/copy-paste-upon-change-procedures-and-their-order-in-table.dnd.spec.js',
  'customer-models/lineas-ibp-tests/mbr-cost-page-tests.spec.js',
  'export-to-image-button/gantt-chart/without-widget-title/on-click-assert-file-downloaded.spec.js',
  'widgets/table/copy-paste/copy-one-cell-and-paste-into-block-selection.dnd.spec.js',
  'widgets/table/copy-paste/copy-paste-aggregator-cells-with-item-actions.dnd.spec.js',
  'widgets/table/copy-paste/validate-error-message-on-copy-paste-of-invalid-values-in-table-dialog-page.dnd.spec.js',
  'widgets/table/copy-paste/copy-paste-with-vertical-scrollbars.dnd.spec.js',
  'widgets/map-v3/assert-store-focus/on-adding-editing-removing-store-focus-identifier/on-adding-new-arc-set.spec.js',
  'widgets/high-charts/combination-chart/x-y-axis-step-size/validate-configuring-step-size-and-viewport-for-x-axis.spec.js',
  'pagev2-tests/tablet-mode-tests/assert-item-action-classic-layout.tablet.spec.js',
  'new-actions/assert-item-actions/on-scalar/with-binary-data/with-single-content.spec.js',
  'pagev2-tests/assert-item-actions/assert-item-action-classic-custom-standard-layout.spec.js',
  'widgets/high-charts/combination-chart/x-y-axis-step-size/validate-configuring-literal-to-step-size-for-x-axis.spec.js',
  'customer-models/lineas-ibp-tests/mbr-overview-page-tests.spec.js',
  'widgets/table/copy-paste/close-browser-open-browser-CTRL+V-should-still-work.dnd.spec.js',
  'application/app-management/assert-app-manager-details/post-widgets-and-pages-drag-and-dropped/test2.dnd.spec.js',
  'selectionbox/selectionbox-scrollbar-bahaviour.spec.js',
  'widgets/table/copy-paste/copy-paste-with-both-scrollbars.dnd.spec.js',
  'application/app-management/assert-app-manager-details/post-widgets-and-pages-drag-and-dropped/test3.dnd.spec.js',
  'application/app-management/assert-app-manager-details/post-widgets-and-pages-drag-and-dropped/test4.dnd.spec.js',
  'bugs/GL4587-overlapping-sidepanel-menu.spec.js',
  'widgets/table/filters/drag-drop/validate-basic-drag-drop-test.spec.js',
  'widgets/gantt/advanced/drag-func/tests-for-right-drag-func.spec.js',
  'widgets/table/copy-paste/copy-paste-exceptions.dnd.spec.js',
  'widgets/list-widget/list-settings/adding-list-groups-data-and-asserting-list-items.spec.js',
  'new-actions/assert-item-actions/on-bubble-chart/on-dialog-part2.spec.js',
  'widgets/table/copy-paste/validate-error-messages-while-copy-paste-of-invalid-values-in-table-rendering.dnd.spec.js',
  'workflow-react/workflow-sublevels/workflow-configuration-validations/validate-sidepanelpage-as-pageid-in-workflow-config.spec.js',
  'widgets/table/copy-paste/copy-paste-at-edges.dnd.spec.js',
  'customer-models/vion/Vion.FixInputOutputCombinations.spec.js',
  'widgets/table/copy-paste/copy-paste-all-data-types.dnd.spec.js',
  'widgets/table/copy-paste/copy-paste-cross-data-types-part1.dnd.spec.js',
  'widgets/map-v3/arc-other-features/arc-label/arc-label-option-via-identifier-tests.spec.js',
  'bugs/GL5240-drag-non-readonly-job.spec.js',
  'widgets/table/copy-paste/copy-paste-with-numdecimals.dnd.spec.js',
  'pagev2-tests/bug-fixes-e2e/experiemental-feature-selection-when-pagev2-configurator-open-bug-2543.spec.js',
  'widgets/table/copy-paste/validate-copy-paste-on-table-dialog-page.dnd.spec.js',
  'menu-bar/menu-bar1/expanded-links-not-visible-when-menu-reopened.spec.js',
  'widgets/text/creation-deletion-editing-of-text-widget-tests-in-dialog-page.spec.js',
  'widgets/text/creation-deletion-editing-of-text-widget-tests-in-sidepanel-page.spec.js',
  'widgets/text/editing-of-text-widget-tests-in-sidepanel-page.spec.js',
  'widgets/text/editing-of-text-widget-tests-in-normal-page.spec.js',
  'customer-models/lineas-ibp-tests/supply-review-resource-supply-page-tests.spec.js',
  'widgets/table/excel-download/validate-download-excel-with-element-text.spec.js',
  'widgets/gantt/advanced/drag-func/tests-for-left-drag-func.spec.js',
  'widgets/map-v3/node-other-features/node-icon/node-icon-option-tests-part2.spec.js',
  'widgets/diagram-widget/nodes/check-coordinates-with-dragging.spec.js',
  'bugs/GL737-editing-html-header-bug.spec.js',
  'widgets/table/copy-paste/copy-paste-on-same-page.dnd.spec.js',
  'widgets/map-v3/editing-node-sets/editing-node-sets-and-verify-details.spec.js',
  'new-actions/assert-item-actions/on-table/on-sidepanel-and-dialog-page.spec.js',
  'selectionbox/selectionbox-display-domain.spec.js',
  'widgets/high-charts/combination-chart/x-y-axis-step-size/validate-configuring-identifier-to-step-size-for-x-axis.spec.js',
  'export-to-image-button/gantt-chart/with-widget-title/with-vertical-scroll/on-click-assert-file-downloaded.spec.js',
  'customer-models/vion/Vion.FixInOutCombAddRestriction.spec.js',
  'widgets/table/copy-paste/copy-block-selection-and-paste-into-one-cell.dnd.spec.js',
  'widgets/table/block-editing/block-edit-cell-scatter-selections.dnd.spec.js',
  'bugs/C4164-scroll-bar-issue-with-sidepanel.spec.js',
  'widgets/table/excel-download/validate-download-excel-for-the-table-sorting-is-applied.spec.js',
  'customer-models/lineas-ibp-tests/project-review-resource-needs-page-tests.spec.js',
  'widgets/table/copy-paste/copy-paste-cross-data-types-part2.dnd.spec.js',
  'widgets/table/excel-download/validate-upload-download-options-displayed-with-the-flag.spec.js',
  'widget-named-views/withElementParameter/set-current-view-from-scalar-widget.spec.js',
  'widgets/table/copy-paste/copy-paste-with-horizontal-scrollbars.dnd.spec.js',
  'widgets/table/html/html-on-off-switch.spec.js',
  'widgets/table/search/searched-value-test.spec.js'
  # Add more file paths here
)

# Loop through each file and move it to the correct folder structure
for file in "${files[@]}"
do
  # Extract the directory path of the file
  file_dir=$(dirname "$file")

  # Extract the file name (basename) of the file
  file_name=$(basename "$file")
  
  # Create the corresponding directory structure inside the destination folder
  mkdir -p "$destination_folder/$file_dir"
  
  # Check if the file exists in the root of the destination folder and move it
  if [ -f "$destination_folder/$file_name" ]; then
    # Move the file from the root of the destination folder into the correct subdirectory
    mv "$destination_folder/$file_name" "$destination_folder/$file_dir/$file_name"
    echo "Moved $file_name to $destination_folder/$file_dir/"
  else
    echo "File not found in root: $destination_folder/$file_name"
  fi
done

echo "Folder structure reconstruction and file moving completed!"
