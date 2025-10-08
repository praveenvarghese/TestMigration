#!/bin/bash

# Specify the destination folder where files are currently located
destination_folder="playwright-failing-tests"

# List of files with their original paths (with commas at the end except the last entry)
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
  'widgets/text/creation-deletion-editing-of-text-widget-tests-in-normal-page.spec.js'
)

# Loop through each file and move it to the correct folder structure
for file in "${files[@]}"
do
  # Extract the directory path of the file
  file_dir=$(dirname "$file")
  
  # Create the corresponding directory structure inside the destination folder
  mkdir -p "$destination_folder/$file_dir"
  
  # Move the file from the root of the destination folder into the correct subdirectory
  file_name=$(basename "$file")
  
  if [ -f "$destination_folder/$file_name" ]; then
    mv "$destination_folder/$file_name" "$destination_folder/$file_dir/$file_name"
    echo "Moved $file_name to $destination_folder/$file_dir/"
  else
    echo "File not found: $destination_folder/$file_name"
  fi
done

echo "Folder structure reconstruction completed!"
