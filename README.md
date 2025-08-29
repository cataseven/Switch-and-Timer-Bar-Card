<a href="https://www.buymeacoffee.com/cataseven" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

# Switch and Timer Bar Card

A flexible Lovelace card for Home Assistant that lets you control a device, manage an associated timer, and track its progress with a visual bar. Perfect for automations that need timing and status tracking—irrigation, pool pumps, blinds, gates, media players, charging stations, and more. You can even turn_off your automations or your input_boolean entity for spesific time that you want!

![image1](images/simple1.png)

## ✨ Features

* **Multi‑domain control:** The card now supports **switch**, **cover**, **lock**, and **media\_player** entities.
* **Device‑aware Start/Stop:** The card sends the right service for each domain (see mapping below).
* **Auto turn‑off at timer end:** When the timer finishes, the card can stop the device automatically.
* **Optional automation mode:** Use `timer_and_entity_connected_via_automation: true` if your own automations already link the timer ↔️ device; the card then avoids extra on/off actions.
* **Smarter status:** “Active” is interpreted sensibly per domain (e.g., covers consider *closed* as active; locks consider *unlocked* as active; media players consider *playing/on* as active).

---

## ✅ Supported domains & service mapping

| Domain         | Start does                                     | Stop does                                       | Active means          |
| :------------- | :--------------------------------------------- | :---------------------------------------------- | :-------------------- |
| `switch`       | `switch.turn_on`                               | `switch.turn_off`                               | state is `on`         |
| `light`        | `light.turn_on`                                | `light.turn_off`                                | state is `on`         |
| `siren`        | `siren.turn_on`                                | `siren.turn_off`                                | state is `on`         |
| `fan`          | `fan.turn_on`                                  | `fan.turn_off`                                  | state is `on`         |
| `automation`   | `automation.turn_on`                           | `automation.turn_off`                           | state is `on`         |
| `input_booelan`| `input_booelan.turn_on`                        | `input_booelan.turn_off`                        | state is `on`         |
| `cover`        | `cover.close_cover`                            | `cover.open_cover`                              | position is `closed`  |
| `lock`         | `lock.unlock`                                  | `lock.lock`                                     | state is `unlocked`   |
| `media_player` | `media_player.media_play` (fallback `turn_on`) | `media_player.media_stop` (fallback `turn_off`) | state is `playing/on` |

> **Note:** When `timer_and_entity_connected_via_automation: true`, the card will **not** call these services; it will only start/stop the timer and display progress. Your automations must handle turning the device on/off.

---

## 📋 Prerequisites

* **Home Assistant**
* **Timer integration** and a device entity from one of the supported domains.
* **(Optional) Sensor for “last run”** to show when the device last completed. Commonly a template sensor updated by an automation.
* **If using automation mode** (`timer_and_entity_connected_via_automation: true`): create automations that (1) turn the device on when the timer starts and (2) turn it off when the timer finishes or is stopped.

## 🚀 Installation

### HACS (Recommended)

1. Go to **HACS → Frontend**.
2. Open the three‑dot menu → **Custom repositories**.
3. Add this repo as **Lovelace/Frontend**.
4. Find **Switch and Timer Bar Card** and click **Install**.

---

## ⚙️ Configuration

Add the card via **Add Card → Manual** and paste YAML.

### Options

| Option                                      | Description                                                                                                                                                                    | Type                | Required | Default |
| :------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ | :------- | :------ |
| `type`                                      | Must be `custom:switch-and-timer-bar-card`.                                                                                                                                    | `string`            | **YES**  |         |
| `title`                                     | Title shown at the top of the card.                                                                                                                                            | `string`            | No       |         |
| `entities`                                  | List of devices to display.                                                                                                                                                    | `list`              | **YES**  |         |
| `switch`                                    | The **entity\_id** of the device to control. **Supported domains:** `switch`, `cover`, `light`, `siren`,`lock`, `media_player`. `automation`, `input_boolean`.                                                               | `string`            | **YES**  |         |
| `timer`                                     | The timer entity associated with the device.                                                                                                                                   | `string`            | No       |         |
| `sensor`                                    | Sensor that stores info about the timer.                                                                                                                                          | `string`            | No       |         |
| `timer_and_entity_connected_via_automation` | Set **true** if your **own automations** handle turning the device on/off when the timer starts/finishes. When **false** (default), the card will call device services itself. | `boolean`           | No       | `true` |
| `button_position`                           | Override global button position (e.g., `left`/`right`) for the whole card or per‑entity.                                                                                       | `string` / `object` | No       |         |
| `colors`                                    | Override colors globally or per‑entity.                                                                                                                                        | `string` / `object` | No       |         |
| `icons`                                     | Override icons globally or per‑entity.                                                                                                                                         | `string` / `object` | No       |         |
| `labels`                                    | Override labels (i18n) globally or per‑entity.                                                                                                                                 | `string` / `object` | No       |         |

---

## 🧩 YAML Examples (by domain & scenario)

Below are **paired** examples for each domain: first with **automation mode off** (`false`), then **automation mode on** (`true`). Replace entity IDs with your own.

### 1) `switch` domain

**Entity and Timer are NOT connected via Automation, Script  etc.**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Pool Pump
    switch: switch.pool_pump
    timer: timer.pool_pump
    sensor: sensor.pool_pump_last_run
    timer_and_entity_connected_via_automation: false
```

**Entity and Timer are connected via Automation, Script  etc. (default)**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Pool Pump
    switch: switch.pool_pump
    timer: timer.pool_pump
    sensor: sensor.pool_pump_last_run
    timer_and_entity_connected_via_automation: true #this line is not required because default value is true
```

---

### 2) `cover` domain (e.g., blinds)

**Entity and Timer are NOT connected via Automation, Script  etc.**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Patio Blind
    switch: cover.patio_blind
    timer: timer.patio_blind
    sensor: sensor.patio_blind_last_run
    timer_and_entity_connected_via_automation: false
```

**Entity and Timer are connected via Automation, Script  etc.**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Patio Blind
    switch: cover.patio_blind
    timer: timer.patio_blind
    sensor: sensor.patio_blind_last_run
    timer_and_entity_connected_via_automation: true
```

---

### 3) `lock` domain (e.g., gate lock)

**Entity and Timer are NOT connected via Automation, Script  etc.**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Garden Gate
    switch: lock.garden_gate
    timer: timer.garden_gate
    sensor: sensor.garden_gate_last_run
    timer_and_entity_connected_via_automation: false
```

**Entity and Timer are connected via Automation, Script  etc.**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Garden Gate
    switch: lock.garden_gate
    timer: timer.garden_gate
    sensor: sensor.garden_gate_last_run
    timer_and_entity_connected_via_automation: true
```

---

### 4) `media_player` domain (e.g., TV or speaker)

**Entity and Timer are NOT connected via Automation, Script  etc.**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Living Room TV
    switch: media_player.living_room_tv
    timer: timer.tv_sleep_timer
    sensor: sensor.tv_last_run
    timer_and_entity_connected_via_automation: false
```

**Entity and Timer are connected via Automation, Script  etc.**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Living Room TV
    switch: media_player.living_room_tv
    timer: timer.tv_sleep_timer
    sensor: sensor.tv_last_run
    timer_and_entity_connected_via_automation: true
```
### 5) `automation` domain (e.g., automation.arriving_home)

**Entity and Timer are NOT connected via Automation, Script  etc.**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Living Room TV
    switch: automation.arriving_home
    timer: timer.stop_automation
    sensor: sensor.stop_automation_last_time
    timer_and_entity_connected_via_automation: false
```

**Entity and Timer are connected via Automation, Script  etc.**

```yaml
type: custom:switch-and-timer-bar-card
entities:
  - name: Living Room TV
    switch: automation.arriving_home
    timer: timer.stop_automation
    sensor: sensor.stop_automation_last_time
    timer_and_entity_connected_via_automation: true
```
---

## 📦 Examples with global defaults

```yaml
type: custom:switch-and-timer-bar-card
title: ''
button_position: left
colors:
  on: '#2196F3'
  ready: '#4CAF50'
  unavailable: '#F44336'
  button_start: '#4CAF50'
  button_stop: '#2196F3'
  icon: 'white'
  progress_fill: '#2196F3'
icons:
  start: 'mdi:play'
  stop: 'mdi:stop'
labels:
  status_on: 'Watering'
  status_ready: 'Ready'
  status_unavailable: 'Unavailable'
  last_on_active: 'Active'
  last_on_now: 'Just now'
  last_on_ago_minutes: 'minutes ago'
  last_on_ago_hours: 'hours ago'
  last_on_ago_days: 'days ago'
  time_format_zero: '0m 00s'
  time_unit_minutes: 'm'
  time_unit_seconds: 's'
entities:
  - name: Zone 1
    switch: switch.zone_1
    timer: timer.zone_1_timer
    sensor: sensor.zone_1_is_finished
  - name: Zone 2
    switch: cover.lounge_blind
    timer: timer.lounge_blind
    sensor: sensor.lounge_blind_last_run
```

![image3](images/water.png)
![image4](images/defaultadvanced.png)

---

## 🔧 Per‑entity overrides example

```yaml
type: custom:switch-and-timer-bar-card
title: ''
button_position: left
colors:
  on: '#2196F3'
  ready: '#4CAF50'
  unavailable: '#F44336'
  button_start: '#4CAF50'
  button_stop: '#2196F3'
  icon: 'white'
  progress_fill: '#2196F3'
icons:
  start: 'mdi:play'
  stop: 'mdi:stop'
labels:
  status_on: 'Watering'
  status_ready: 'Ready'
  status_unavailable: 'Unavailable'
  last_on_active: 'Active'
  last_on_now: 'Just now'
  last_on_ago_minutes: 'minutes ago'
  last_on_ago_hours: 'hours ago'
  last_on_ago_days: 'days ago'
  time_format_zero: '0m 00s'
  time_unit_minutes: 'm'
  time_unit_seconds: 's'
entities:
  - name: Zone 1
    switch: switch.zone_1
    timer: timer.zone_1_timer
    sensor: sensor.zone_1_is_finished
  - name: Zone 2
    switch: switch.zone_2
    timer: timer.zone_2_timer
    sensor: sensor.zone_2_is_finished
  - name: Living Room Light
    switch: switch.zone_3
    timer: timer.zone_3_timer
    sensor: sensor.zone_3_is_finished
    button_position: right
    colors:
      button_start: '#F443FF'
      ready: '#FF5500'
    icons:
      start: 'mdi:light-switch'
    labels:
      status_ready: 'Light Off'
```

![image5](images/entityadvanced.png)

---

## 🧪 How to create a trigger‑based sensor

To show "last run" on the card, you can create a template sensor that updates when the timer finishes (works for all domains) and/or when the device turns off. Example below uses both a `timer.finished` event and a switch turning off; adapt the second trigger for your domain if needed.

```yaml
template:
  - trigger:
      - trigger: event
        event_type: timer.finished
        event_data:
          entity_id: timer.zone_1_timer
      - trigger: state
        entity_id: switch.zone_1   # For non-switch domains, change to your entity
        from: 'on'
        to: 'off'
    sensor:
      - name: zone_1_is_finished
        state: "{{ now().timestamp() | as_datetime }}"
```

---

## License

MIT — see the `LICENSE` file.

## ⭐ Support

<a href="https://www.buymeacoffee.com/cataseven" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" >
</a>
