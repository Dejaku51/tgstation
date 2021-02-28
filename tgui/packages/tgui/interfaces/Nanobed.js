import { useBackend } from '../backend';
import { Button, Section, NumberInput, LabeledList, ProgressBar } from '../components';
import { Window } from '../layouts';

export const Nanobed = (props, context) => {
  const { act, data } = useBackend(context);
  // Extract `active`, `cloud_id` `current_nanites`, `max_nanites` and `trigger` variables from the `data` object.
  const {
    active,
    cloud_id,
    current_nanites,
    max_nanites,
    trigger,
  } = data;
  return (
    <Window resizable>
      <Window.Content scrollable>
        <Section
          title="Nanite Bed"
          buttons={(
            <Button
              icon={active ? 'power-off' : 'times'}
              content={active ? 'Active' : 'Inactive'}
              selected={active}
              color="bad"
              bold
              onClick={() => act('toggle_active')} />
          )}>
          <LabeledList>
            <LabeledList.Item label="Nanites">
              <ProgressBar value={current_nanites} MinValue={0} maxValue={max_nanites} />
            </LabeledList.Item>
            <LabeledList.Item label="Cloud ID">
              <NumberInput
                value={cloud_id}
                width="47px"
                minValue={1}
                maxValue={100}
                onChange={(e, value) => act('set_cloud', {
                code: value,
              })} />
            </LabeledList.Item>
            <LabeledList.Item label="Trigger">
              <NumberInput
                value={trigger}
                width="47px"
                minValue={1}
                maxValue={10000}
                onChange={(e, value) => act('trigger', {
                code: value,
              })} />
            </LabeledList.Item>
          </LabeledList>
        </Section>
      </Window.Content>
    </Window>

  );
};
