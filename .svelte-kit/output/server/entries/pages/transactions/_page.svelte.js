import { c as create_ssr_component, l as subscribe, s as setContext, o as onDestroy, y as set_store_value, j as escape, f as add_attribute, k as each, a as compute_rest_props, g as get_current_component, h as getContext, b as spread, e as escape_attribute_value, d as escape_object, v as validate_component, i as globals, z as compute_slots, n as is_promise, p as noop } from "../../../chunks/index3.js";
import { L as LinearProgress } from "../../../chunks/LinearProgress.js";
import { f as forwardEventsBuilder, c as classMap, P as Prefix, i as Suffix, j as HelperLine } from "../../../chunks/index.svelte_svelte_type_style_lang.js";
import { w as waitForAll } from "../../../chunks/multiPromise.js";
import "../../../chunks/records.js";
import { e as exclude, p as prefixFilter } from "../../../chunks/prefixFilter.js";
import { w as writable } from "../../../chunks/index2.js";
import { T as TradeTransaction, g as goto } from "../../../chunks/TradeTransaction.js";
import { B as Button_1 } from "../../../chunks/Button.js";
import { L as Label } from "../../../chunks/index4.js";
import { I as IconButton } from "../../../chunks/IconButton.js";
import { P as Pagination } from "../../../chunks/Pagination.js";
import { match } from "fuzzyjs";
import { g as getLeagueTransactions } from "../../../chunks/leagueTransactions.js";
import { l as loadPlayers } from "../../../chunks/players.js";
import { g as getTeamFromTeamManagers } from "../../../chunks/universalFunctions.js";
const ContextFragment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeValue, $$unsubscribe_storeValue;
  let { key } = $$props;
  let { value } = $$props;
  const storeValue = writable(value);
  $$unsubscribe_storeValue = subscribe(storeValue, (value2) => $storeValue = value2);
  setContext(key, storeValue);
  onDestroy(() => {
    storeValue.set(void 0);
  });
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  set_store_value(storeValue, $storeValue = value, $storeValue);
  $$unsubscribe_storeValue();
  return `${slots.default ? slots.default({}) : ``}`;
});
const css$2 = {
  code: ".waiverTransaction.svelte-1ods821{display:flex;flex-direction:column;margin-bottom:1em}.name.svelte-1ods821{position:relative}.core.svelte-1ods821{display:flex;flex-direction:column;border-radius:0 0 0 40px;border:1px solid var(--ddd);border-left:2px solid #51B59A;border-bottom:none;background-color:var(--fff)}.avatarAndDetails.svelte-1ods821{display:flex;padding:25px 0 0;flex-direction:column;justify-content:end}.avatar.svelte-1ods821{position:absolute;left:0px;top:6px;border-radius:50%;height:40px;width:40px;border:2px solid #51B59A;background-color:var(--fff)}.ownerName.svelte-1ods821{display:inline-block;border-bottom:2px solid var(--blueTwo);margin:0 0 0 22px;padding-right:30px;padding-left:30px}.playerAvatar.svelte-1ods821{display:inline-block;vertical-align:middle;height:50px;width:50px;background-position:center;border:2px solid;border-radius:100%;background-repeat:no-repeat;background-size:auto 50px;position:relative}.currentOwner.svelte-1ods821{font-style:italic;color:var(--aaa)}.clickable.svelte-1ods821{cursor:pointer}.details.svelte-1ods821{display:flex;align-items:center;justify-content:space-between;width:80%;padding:0 10%}.player.svelte-1ods821{display:flex}.playerName.svelte-1ods821{font-size:0.8em;line-height:1em;text-align:center}.playerInfo.svelte-1ods821{font-size:0.6em;color:var(--g555);line-height:1em}.add.svelte-1ods821{color:#00ceb8}.drop.svelte-1ods821{color:#ff2a6d}.indicator.svelte-1ods821{position:absolute;bottom:-8px;right:-8px}.nameHolder.svelte-1ods821{display:flex;flex-direction:column;padding-left:0.5em;justify-content:center;align-items:center}.bid.svelte-1ods821{color:var(--g555);font-style:italic}.date.svelte-1ods821{color:var(--g999);font-style:italic;font-size:0.7em;text-align:center;margin-top:0.7em}@media(max-width: 410px){.player.svelte-1ods821{flex-direction:column;align-items:center}.details.svelte-1ods821{width:90%;padding:0 5%}.nameHolder.svelte-1ods821{margin-top:0.5em;padding-left:0;font-size:0.9em}}",
  map: null
};
const WaiverTransaction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { transaction, players, leagueTeamManagers } = $$props;
  const owner = transaction.rosters[0];
  const getAvatar = (pos, player) => {
    if (pos == "DEF") {
      return `background-image: url(https://sleepercdn.com/images/team_logos/nfl/${player.toLowerCase()}.png)`;
    }
    return `background-image: url(https://sleepercdn.com/content/nfl/players/thumb/${player}.jpg), url(https://sleepercdn.com/images/v2/icons/player_default.webp)`;
  };
  if ($$props.transaction === void 0 && $$bindings.transaction && transaction !== void 0)
    $$bindings.transaction(transaction);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  $$result.css.add(css$2);
  return `<div class="waiverTransaction clickable svelte-1ods821"><div class="name svelte-1ods821"><span class="ownerName svelte-1ods821">${escape(getTeamFromTeamManagers(leagueTeamManagers, owner, transaction.season).name)}
            ${getTeamFromTeamManagers(leagueTeamManagers, owner, transaction.season).name != getTeamFromTeamManagers(leagueTeamManagers, owner).name ? `<span class="currentOwner svelte-1ods821">(${escape(getTeamFromTeamManagers(leagueTeamManagers, owner).name)})</span>` : ``}
            ${transaction.moves[0][0].bid ? `<span class="bid svelte-1ods821">- ${escape(transaction.moves[0][0].bid)}$
                </span>` : ``}</span>
        <img class="avatar svelte-1ods821"${add_attribute("src", getTeamFromTeamManagers(leagueTeamManagers, owner, transaction.season).avatar, 0)} alt="${escape(getTeamFromTeamManagers(leagueTeamManagers, owner, transaction.season).name, true) + " avatar"}"></div>
    <div class="core svelte-1ods821"><div class="avatarAndDetails svelte-1ods821"><div class="details svelte-1ods821">${each(transaction.moves, (move) => {
    return `<div class="player svelte-1ods821"><div class="playerAvatar svelte-1ods821" style="${"border-color: var(--" + escape(players[move[0].player].pos, true) + "); background-color: var(--" + escape(move[0].type == "Added" ? "waiverAdd" : "waiverDrop", true) + "); " + escape(getAvatar(players[move[0].player].pos, move[0].player), true)}">${move[0].type == "Added" ? `<i class="add indicator material-icons svelte-1ods821" aria-hidden="true">add_circle</i>` : `${move[0].type == "Dropped" ? `<i class="drop indicator material-icons svelte-1ods821" aria-hidden="true">do_not_disturb_on</i>` : ``}`}</div>
                        <span class="nameHolder svelte-1ods821"><span class="playerName svelte-1ods821">${escape(`${players[move[0].player].fn} ${players[move[0].player].ln}`)}</span>
                            <span class="playerInfo svelte-1ods821"><span>${escape(players[move[0].player].pos)}</span>
                                ${players[move[0].player].t ? `-
                                    <span>${escape(players[move[0].player].t)}</span>` : ``}
                            </span></span>
                    </div>`;
  })}</div></div>
        <span class="date svelte-1ods821">${escape(transaction.date)}</span></div></div>`;
});
const FloatingLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "shake",
    "float",
    "setRequired",
    "getWidth",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { for: forId = void 0 } = $$props;
  let { floatAbove = false } = $$props;
  let { required = false } = $$props;
  let { wrapped = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  function shake(shouldShake) {
    instance.shake(shouldShake);
  }
  function float(shouldFloat) {
    floatAbove = shouldFloat;
  }
  function setRequired(isRequired) {
    required = isRequired;
  }
  function getWidth() {
    return instance.getWidth();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.for === void 0 && $$bindings.for && forId !== void 0)
    $$bindings.for(forId);
  if ($$props.floatAbove === void 0 && $$bindings.floatAbove && floatAbove !== void 0)
    $$bindings.floatAbove(floatAbove);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.wrapped === void 0 && $$bindings.wrapped && wrapped !== void 0)
    $$bindings.wrapped(wrapped);
  if ($$props.shake === void 0 && $$bindings.shake && shake !== void 0)
    $$bindings.shake(shake);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0)
    $$bindings.float(float);
  if ($$props.setRequired === void 0 && $$bindings.setRequired && setRequired !== void 0)
    $$bindings.setRequired(setRequired);
  if ($$props.getWidth === void 0 && $$bindings.getWidth && getWidth !== void 0)
    $$bindings.getWidth(getWidth);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `${wrapped ? `<span${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": floatAbove,
          "mdc-floating-label--required": required,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `<label${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": floatAbove,
          "mdc-floating-label--required": required,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      {
        for: escape_attribute_value(forId || (inputProps ? inputProps.id : void 0))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</label>`}`;
});
const LineRipple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { active = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  function activate() {
    instance.activate();
  }
  function deactivate() {
    instance.deactivate();
  }
  function setRippleCenter(xCoordinate) {
    instance.setRippleCenter(xCoordinate);
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activate === void 0 && $$bindings.activate && activate !== void 0)
    $$bindings.activate(activate);
  if ($$props.deactivate === void 0 && $$bindings.deactivate && deactivate !== void 0)
    $$bindings.deactivate(deactivate);
  if ($$props.setRippleCenter === void 0 && $$bindings.setRippleCenter && setRippleCenter !== void 0)
    $$bindings.setRippleCenter(setRippleCenter);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-line-ripple": true,
          "mdc-line-ripple--active": active,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}></div>`;
});
const NotchedOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { notched = false } = $$props;
  let { noLabel = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let notchStyles = {};
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function notch(notchWidth) {
    instance.notch(notchWidth);
  }
  function closeNotch() {
    instance.closeNotch();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.notched === void 0 && $$bindings.notched && notched !== void 0)
    $$bindings.notched(notched);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.notch === void 0 && $$bindings.notch && notch !== void 0)
    $$bindings.notch(notch);
  if ($$props.closeNotch === void 0 && $$bindings.closeNotch && closeNotch !== void 0)
    $$bindings.closeNotch(closeNotch);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    {
      removeClass("mdc-notched-outline--upgraded");
    }
  }
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-notched-outline": true,
          "mdc-notched-outline--notched": notched,
          "mdc-notched-outline--no-label": noLabel,
          ...internalClasses
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-notched-outline__leading"></div>
  ${!noLabel ? `<div class="mdc-notched-outline__notch"${add_attribute("style", Object.entries(notchStyles).map(([name, value]) => `${name}: ${value};`).join(" "), 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}
  <div class="mdc-notched-outline__trailing"></div>
</div>`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "emptyValueNull",
    "emptyValueUndefined",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = " " } = $$props;
  let { value = uninitializedValue } = $$props;
  const valueUninitialized = isUninitializedValue(value);
  if (valueUninitialized) {
    value = "";
  }
  let { files = null } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { emptyValueNull = value === null } = $$props;
  if (valueUninitialized && emptyValueNull) {
    value = null;
  }
  let { emptyValueUndefined = value === void 0 } = $$props;
  if (valueUninitialized && emptyValueUndefined) {
    value = void 0;
  }
  let element;
  let internalAttrs = {};
  let valueProp = {};
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      internalAttrs[name] = value2;
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = void 0;
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.emptyValueNull === void 0 && $$bindings.emptyValueNull && emptyValueNull !== void 0)
    $$bindings.emptyValueNull(emptyValueNull);
  if ($$props.emptyValueUndefined === void 0 && $$bindings.emptyValueUndefined && emptyValueUndefined !== void 0)
    $$bindings.emptyValueUndefined(emptyValueUndefined);
  if ($$props.getAttr === void 0 && $$bindings.getAttr && getAttr !== void 0)
    $$bindings.getAttr(getAttr);
  if ($$props.addAttr === void 0 && $$bindings.addAttr && addAttr !== void 0)
    $$bindings.addAttr(addAttr);
  if ($$props.removeAttr === void 0 && $$bindings.removeAttr && removeAttr !== void 0)
    $$bindings.removeAttr(removeAttr);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (type === "file") {
      delete valueProp.value;
      valueProp = valueProp;
    } else {
      valueProp.value = value == null ? "" : value;
    }
  }
  return `<input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-text-field__input": true
        }))
      },
      { type: escape_attribute_value(type) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      escape_object(valueProp),
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "resizable",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { value = "" } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { resizable = true } = $$props;
  let element;
  let internalAttrs = {};
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      internalAttrs[name] = value2;
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = void 0;
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.resizable === void 0 && $$bindings.resizable && resizable !== void 0)
    $$bindings.resizable(resizable);
  if ($$props.getAttr === void 0 && $$bindings.getAttr && getAttr !== void 0)
    $$bindings.getAttr(getAttr);
  if ($$props.addAttr === void 0 && $$bindings.addAttr && addAttr !== void 0)
    $$bindings.addAttr(addAttr);
  if ($$props.removeAttr === void 0 && $$bindings.removeAttr && removeAttr !== void 0)
    $$bindings.removeAttr(removeAttr);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<textarea${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-text-field__input": true
        }))
      },
      {
        style: escape_attribute_value(`${resizable ? "" : "resize: none; "}${style}`)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${value || ""}</textarea>`;
});
const { Object: Object_1 } = globals;
const Textfield = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "focus",
    "blur",
    "layout",
    "getElement"
  ]);
  let $$slots = compute_slots(slots);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { textarea = false } = $$props;
  let { variant = textarea ? "outlined" : "standard" } = $$props;
  let { noLabel = false } = $$props;
  let { label = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { value = $$restProps.input$emptyValueUndefined ? void 0 : uninitializedValue } = $$props;
  let { files = uninitializedValue } = $$props;
  const valued = !isUninitializedValue(value) || !isUninitializedValue(files);
  if (isUninitializedValue(value)) {
    value = void 0;
  }
  if (isUninitializedValue(files)) {
    files = null;
  }
  let { invalid = uninitializedValue } = $$props;
  let { updateInvalid = isUninitializedValue(invalid) } = $$props;
  if (isUninitializedValue(invalid)) {
    invalid = false;
  }
  let { dirty = false } = $$props;
  let { prefix = void 0 } = $$props;
  let { suffix = void 0 } = $$props;
  let { validateOnValueChange = updateInvalid } = $$props;
  let { useNativeValidation = updateInvalid } = $$props;
  let { withLeadingIcon = uninitializedValue } = $$props;
  let { withTrailingIcon = uninitializedValue } = $$props;
  let { input = void 0 } = $$props;
  let { floatingLabel = void 0 } = $$props;
  let { lineRipple = void 0 } = $$props;
  let { notchedOutline = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let helperId = void 0;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  new Promise((resolve) => resolve);
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function focus() {
    input === null || input === void 0 ? void 0 : input.focus();
  }
  function blur() {
    input === null || input === void 0 ? void 0 : input.blur();
  }
  function layout() {
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.textarea === void 0 && $$bindings.textarea && textarea !== void 0)
    $$bindings.textarea(textarea);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.updateInvalid === void 0 && $$bindings.updateInvalid && updateInvalid !== void 0)
    $$bindings.updateInvalid(updateInvalid);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.validateOnValueChange === void 0 && $$bindings.validateOnValueChange && validateOnValueChange !== void 0)
    $$bindings.validateOnValueChange(validateOnValueChange);
  if ($$props.useNativeValidation === void 0 && $$bindings.useNativeValidation && useNativeValidation !== void 0)
    $$bindings.useNativeValidation(useNativeValidation);
  if ($$props.withLeadingIcon === void 0 && $$bindings.withLeadingIcon && withLeadingIcon !== void 0)
    $$bindings.withLeadingIcon(withLeadingIcon);
  if ($$props.withTrailingIcon === void 0 && $$bindings.withTrailingIcon && withTrailingIcon !== void 0)
    $$bindings.withTrailingIcon(withTrailingIcon);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.floatingLabel === void 0 && $$bindings.floatingLabel && floatingLabel !== void 0)
    $$bindings.floatingLabel(floatingLabel);
  if ($$props.lineRipple === void 0 && $$bindings.lineRipple && lineRipple !== void 0)
    $$bindings.lineRipple(lineRipple);
  if ($$props.notchedOutline === void 0 && $$bindings.notchedOutline && notchedOutline !== void 0)
    $$bindings.notchedOutline(notchedOutline);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    input && input.getElement();
    $$rendered = `${valued ? `<label${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "mdc-text-field": true,
            "mdc-text-field--disabled": disabled,
            "mdc-text-field--textarea": textarea,
            "mdc-text-field--filled": variant === "filled",
            "mdc-text-field--outlined": variant === "outlined",
            "smui-text-field--standard": variant === "standard" && !textarea,
            "mdc-text-field--no-label": noLabel || label == null && !$$slots.label,
            "mdc-text-field--label-floating": value != null && value !== "",
            "mdc-text-field--with-leading-icon": isUninitializedValue(withLeadingIcon) ? $$slots.leadingIcon : withLeadingIcon,
            "mdc-text-field--with-trailing-icon": isUninitializedValue(withTrailingIcon) ? $$slots.trailingIcon : withTrailingIcon,
            "mdc-text-field--with-internal-counter": textarea && $$slots.internalCounter,
            "mdc-text-field--invalid": invalid,
            ...internalClasses
          }))
        },
        {
          style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
        },
        {
          for: escape_attribute_value(
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        escape_object(exclude($$restProps, ["input$", "label$", "ripple$", "outline$", "helperLine$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${!textarea && variant !== "outlined" ? `${variant === "filled" ? `<span class="mdc-text-field__ripple"></span>` : ``}
      ${!noLabel && (label != null || $$slots.label) ? `${validate_component(FloatingLabel, "FloatingLabel").$$render(
      $$result,
      Object_1.assign(
        {},
        {
          floatAbove: value != null && value !== ""
        },
        { required },
        { wrapped: true },
        prefixFilter($$restProps, "label$"),
        { this: floatingLabel }
      ),
      {
        this: ($$value) => {
          floatingLabel = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(label == null ? "" : label)}${slots.label ? slots.label({}) : ``}`;
        }
      }
    )}` : ``}` : ``}
    ${textarea || variant === "outlined" ? `${validate_component(NotchedOutline, "NotchedOutline").$$render(
      $$result,
      Object_1.assign(
        {},
        {
          noLabel: noLabel || label == null && !$$slots.label
        },
        prefixFilter($$restProps, "outline$"),
        { this: notchedOutline }
      ),
      {
        this: ($$value) => {
          notchedOutline = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${!noLabel && (label != null || $$slots.label) ? `${validate_component(FloatingLabel, "FloatingLabel").$$render(
            $$result,
            Object_1.assign(
              {},
              {
                floatAbove: value != null && value !== ""
              },
              { required },
              { wrapped: true },
              prefixFilter($$restProps, "label$"),
              { this: floatingLabel }
            ),
            {
              this: ($$value) => {
                floatingLabel = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${escape(label == null ? "" : label)}${slots.label ? slots.label({}) : ``}`;
              }
            }
          )}` : ``}`;
        }
      }
    )}` : ``}
    ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: true
      },
      {},
      {
        default: () => {
          return `${slots.leadingIcon ? slots.leadingIcon({}) : ``}`;
        }
      }
    )}
    ${slots.default ? slots.default({}) : ``}
    ${textarea && typeof value === "string" ? `<span${add_attribute(
      "class",
      classMap({
        "mdc-text-field__resizer": !("input$resizable" in $$restProps) || $$restProps.input$resizable
      }),
      0
    )}>${validate_component(Textarea, "Textarea").$$render(
      $$result,
      Object_1.assign({}, { disabled }, { required }, { updateInvalid }, { "aria-controls": helperId }, { "aria-describedby": helperId }, prefixFilter($$restProps, "input$"), { this: input }, { value }, { dirty }, { invalid }),
      {
        this: ($$value) => {
          input = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        dirty: ($$value) => {
          dirty = $$value;
          $$settled = false;
        },
        invalid: ($$value) => {
          invalid = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${slots.internalCounter ? slots.internalCounter({}) : ``}</span>` : `${slots.prefix ? slots.prefix({}) : ``}
      ${prefix != null ? `${validate_component(Prefix, "Prefix").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(prefix)}`;
      }
    })}` : ``}
      ${validate_component(Input, "Input").$$render(
      $$result,
      Object_1.assign({}, { type }, { disabled }, { required }, { updateInvalid }, { "aria-controls": helperId }, { "aria-describedby": helperId }, noLabel && label != null ? { placeholder: label } : {}, prefixFilter($$restProps, "input$"), { this: input }, { value }, { files }, { dirty }, { invalid }),
      {
        this: ($$value) => {
          input = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        files: ($$value) => {
          files = $$value;
          $$settled = false;
        },
        dirty: ($$value) => {
          dirty = $$value;
          $$settled = false;
        },
        invalid: ($$value) => {
          invalid = $$value;
          $$settled = false;
        }
      },
      {}
    )}
      ${suffix != null ? `${validate_component(Suffix, "Suffix").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(suffix)}`;
      }
    })}` : ``}
      ${slots.suffix ? slots.suffix({}) : ``}`}
    ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: false
      },
      {},
      {
        default: () => {
          return `${slots.trailingIcon ? slots.trailingIcon({}) : ``}`;
        }
      }
    )}
    ${!textarea && variant !== "outlined" && ripple ? `${validate_component(LineRipple, "LineRipple").$$render(
      $$result,
      Object_1.assign({}, prefixFilter($$restProps, "ripple$"), { this: lineRipple }),
      {
        this: ($$value) => {
          lineRipple = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</label>` : `<div${spread(
      [
        {
          class: escape_attribute_value(classMap({
            [className]: true,
            "mdc-text-field": true,
            "mdc-text-field--disabled": disabled,
            "mdc-text-field--textarea": textarea,
            "mdc-text-field--filled": variant === "filled",
            "mdc-text-field--outlined": variant === "outlined",
            "smui-text-field--standard": variant === "standard" && !textarea,
            "mdc-text-field--no-label": noLabel || !$$slots.label,
            "mdc-text-field--with-leading-icon": $$slots.leadingIcon,
            "mdc-text-field--with-trailing-icon": $$slots.trailingIcon,
            "mdc-text-field--invalid": invalid,
            ...internalClasses
          }))
        },
        {
          style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
        },
        escape_object(exclude($$restProps, ["input$", "label$", "ripple$", "outline$", "helperLine$"]))
      ],
      {}
    )}${add_attribute("this", element, 0)}>${slots.label ? slots.label({}) : ``}
    ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: true
      },
      {},
      {
        default: () => {
          return `${slots.leadingIcon ? slots.leadingIcon({}) : ``}`;
        }
      }
    )}
    ${slots.default ? slots.default({}) : ``}
    ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: false
      },
      {},
      {
        default: () => {
          return `${slots.trailingIcon ? slots.trailingIcon({}) : ``}`;
        }
      }
    )}
    ${slots.ripple ? slots.ripple({}) : ``}</div>`}
${$$slots.helper ? `${validate_component(HelperLine, "HelperLine").$$render($$result, Object_1.assign({}, prefixFilter($$restProps, "helperLine$")), {}, {
      default: () => {
        return `${slots.helper ? slots.helper({}) : ``}`;
      }
    })}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "role", "tabindex", "disabled", "getElement"]);
  let $leadingStore, $$unsubscribe_leadingStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { role = void 0 } = $$props;
  let { tabindex = role === "button" ? 0 : -1 } = $$props;
  let { disabled = false } = $$props;
  let element;
  let internalAttrs = {};
  const leadingStore = getContext("SMUI:textfield:icon:leading");
  $$unsubscribe_leadingStore = subscribe(leadingStore, (value) => $leadingStore = value);
  const leading = $leadingStore;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  $$unsubscribe_leadingStore();
  return `<i${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-text-field__icon": true,
          "mdc-text-field__icon--leading": leading,
          "mdc-text-field__icon--trailing": !leading
        }))
      },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      {
        "aria-hidden": escape_attribute_value(tabindex === -1 ? "true" : "false")
      },
      {
        "aria-disabled": escape_attribute_value(role === "button" ? disabled ? "true" : "false" : void 0)
      },
      { role: escape_attribute_value(role) },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${`${slots.default ? slots.default({}) : ``}`}</i>`;
});
const css$1 = {
  code: ".transactionsParent.svelte-1vi4974{display:flex;flex-wrap:wrap;position:relative;width:100%;z-index:1;overflow-y:hidden}@media(max-width: 1000px){}.transactions.svelte-1vi4974{flex-grow:1;padding:0 15px}p.svelte-1vi4974{text-align:center}h5.svelte-1vi4974{text-align:center;margin:30px auto 16px}.buttons.svelte-1vi4974{margin:40px auto 0}.disabled{pointer-events:none}.invis-buttons.svelte-1vi4974{display:none !important}.searchContainer.svelte-1vi4974{width:100%;text-align:center;margin:2em 0 .5em}.clearPlaceholder.svelte-1vi4974{width:48px;display:inline-block}.empty.svelte-1vi4974{width:100%;font-style:italic;text-align:center;color:#999}",
  map: null
};
const TransactionsPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredTransactions;
  let displayTransactions;
  let top;
  let { show, playersInfo, query, queryPage, transactions, stale, perPage: perPage2, postUpdate = false, leagueTeamManagers } = $$props;
  let page = queryPage || 0;
  const refreshTransactions = async () => {
    const newTransactions = await getLeagueTransactions(false, true);
    transactions = newTransactions.transactions;
  };
  if (stale) {
    refreshTransactions();
  }
  let players = playersInfo.players;
  const refreshPlayers = async () => {
    const newPlayersInfo = await loadPlayers(null, true);
    players = newPlayersInfo.players;
  };
  if (playersInfo.stale) {
    refreshPlayers();
  }
  let subsetTransactions = [];
  let totalTransactions = 0;
  const setFilter = (filterBy, transactions2) => {
    if (filterBy == "both") {
      return transactions2;
    } else {
      return transactions2.filter((transaction) => transaction.type == filterBy);
    }
  };
  const setQuery = (query2, filteredTransactions2) => {
    if (!filteredTransactions2) {
      return [];
    }
    if (query2 && query2.trim() != "") {
      subsetTransactions = filteredTransactions2.filter((transaction) => checkForQuery(transaction));
      totalTransactions = subsetTransactions.length;
    } else {
      subsetTransactions = filteredTransactions2;
      totalTransactions = subsetTransactions.length;
    }
    const start = page * perPage2;
    const end = (page + 1) * perPage2;
    return subsetTransactions.slice(start, end);
  };
  const changePage = (dest, pageChange = false) => {
    if (queryPage == dest && pageChange)
      return;
    page = dest;
    if (dest > filteredTransactions.length / perPage2 || dest < 0) {
      page = 0;
    }
    displayTransactions = setQuery(query, filteredTransactions);
    if (postUpdate) {
      goto(`/transactions?show=${show}&query=${query}&page=${page + 1}`, { noscroll: true, keepfocus: true });
    }
  };
  const checkMatch = (query2, name) => {
    const nameMatch = match(query2, name);
    if (nameMatch.match && nameMatch.score > 0) {
      nameMatch.score;
      return true;
    }
  };
  const checkForQuery = (transaction) => {
    const moves = transaction.moves;
    for (const move of moves) {
      for (const col of move) {
        if (!col?.player)
          continue;
        return checkMatch(query, `${players[col.player].fn} ${players[col.player].ln}`);
      }
    }
    return false;
  };
  let el;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.playersInfo === void 0 && $$bindings.playersInfo && playersInfo !== void 0)
    $$bindings.playersInfo(playersInfo);
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.queryPage === void 0 && $$bindings.queryPage && queryPage !== void 0)
    $$bindings.queryPage(queryPage);
  if ($$props.transactions === void 0 && $$bindings.transactions && transactions !== void 0)
    $$bindings.transactions(transactions);
  if ($$props.stale === void 0 && $$bindings.stale && stale !== void 0)
    $$bindings.stale(stale);
  if ($$props.perPage === void 0 && $$bindings.perPage && perPage2 !== void 0)
    $$bindings.perPage(perPage2);
  if ($$props.postUpdate === void 0 && $$bindings.postUpdate && postUpdate !== void 0)
    $$bindings.postUpdate(postUpdate);
  if ($$props.leagueTeamManagers === void 0 && $$bindings.leagueTeamManagers && leagueTeamManagers !== void 0)
    $$bindings.leagueTeamManagers(leagueTeamManagers);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredTransactions = setFilter(show, transactions);
    displayTransactions = setQuery(query, filteredTransactions);
    {
      changePage(page, true);
    }
    {
      setQuery(query);
    }
    top = 0;
    $$rendered = `<div class="transactionsParent svelte-1vi4974"><div class="${"buttons " + escape(show == "trade" ? "" : "invis-buttons", true) + " svelte-1vi4974"}">${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: show == "trade" ? "disabled" : "",
        color: "primary",
        variant: show == "trade" ? "raised" : "outlined",
        touch: true
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Trades`;
            }
          })}`;
        }
      }
    )}
		${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: show == "waiver" ? "disabled" : "",
        color: "primary",
        variant: show == "waiver" ? "raised" : "outlined",
        touch: true
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Waivers`;
            }
          })}`;
        }
      }
    )}
		${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: show == "both" ? "disabled" : "",
        color: "primary",
        variant: show == "both" ? "raised" : "outlined",
        touch: true
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Both`;
            }
          })}`;
        }
      }
    )}</div>
	<div class="${"buttons " + escape(show == "waiver" ? "" : "invis-buttons", true) + " svelte-1vi4974"}">${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: show == "trade" ? "disabled" : "",
        color: "primary",
        variant: show == "trade" ? "raised" : "outlined",
        touch: true
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Trades`;
            }
          })}`;
        }
      }
    )}
		${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: show == "waiver" ? "disabled" : "",
        color: "primary",
        variant: show == "waiver" ? "raised" : "outlined",
        touch: true
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Waivers`;
            }
          })}`;
        }
      }
    )}
		${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: show == "both" ? "disabled" : "",
        color: "primary",
        variant: show == "both" ? "raised" : "outlined",
        touch: true
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Both`;
            }
          })}`;
        }
      }
    )}</div>
	<div class="${"buttons " + escape(show == "both" ? "" : "invis-buttons", true) + " svelte-1vi4974"}">${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: show == "trade" ? "disabled" : "",
        color: "primary",
        variant: show == "trade" ? "raised" : "outlined",
        touch: true
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Trades`;
            }
          })}`;
        }
      }
    )}
		${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: show == "waiver" ? "disabled" : "",
        color: "primary",
        variant: show == "waiver" ? "raised" : "outlined",
        touch: true
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Waivers`;
            }
          })}`;
        }
      }
    )}
		${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: show == "both" ? "disabled" : "",
        color: "primary",
        variant: show == "both" ? "raised" : "outlined",
        touch: true
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Both`;
            }
          })}`;
        }
      }
    )}</div>
	<div class="searchContainer svelte-1vi4974"><span class="clearPlaceholder svelte-1vi4974"></span>
		${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "shaped-outlined",
        variant: "outlined",
        label: "Search for a player...",
        value: query
      },
      {
        value: ($$value) => {
          query = $$value;
          $$settled = false;
        }
      },
      {
        leadingIcon: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              class: "material-icons",
              slot: "leadingIcon"
            },
            {},
            {
              default: () => {
                return `search`;
              }
            }
          )}`;
        }
      }
    )}
		${query.length > 0 ? `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
      default: () => {
        return `clear`;
      }
    })}` : `<span class="clearPlaceholder svelte-1vi4974"></span>`}</div>

	<div class="transactions svelte-1vi4974"${add_attribute("this", el, 0)}>${show == "both" ? `
			<h5 class="svelte-1vi4974">Recent Transactions</h5>` : `${show == "trade" ? `
			<h5 class="svelte-1vi4974">Recent Trades</h5>` : `
			<h5 class="svelte-1vi4974">Recent Waivers</h5>`}`}

		${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        perPage: perPage2,
        total: totalTransactions,
        target: top,
        scroll: false,
        page
      },
      {
        page: ($$value) => {
          page = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		<div class="transactions-child">${each(displayTransactions, (transaction) => {
      return `${transaction.type == "waiver" ? `${validate_component(WaiverTransaction, "WaiverTransaction").$$render($$result, { players, transaction, leagueTeamManagers }, {}, {})}` : `${validate_component(TradeTransaction, "TradeTransaction").$$render($$result, { players, transaction, leagueTeamManagers }, {}, {})}`}`;
    })}</div>
		${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        perPage: perPage2,
        total: totalTransactions,
        target: top,
        scroll: true,
        page
      },
      {
        page: ($$value) => {
          page = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

	${totalTransactions == 0 ? `${show == "trade" ? `<p class="empty svelte-1vi4974">${escape(query.trim() != "" ? "No trades match your search" : "Nobody has made any trades yet... that's just sad")}</p>` : `${show == "waiver" ? `<p class="empty svelte-1vi4974">${escape(query.trim() != "" ? "No waivers match your search" : "Nobody has made any waiver wire moves yet... that's just sad")}</p>` : `<p class="empty svelte-1vi4974">${escape(query.trim() != "" ? "No transactions match your search" : "Nobody has made any moves yet... that's just sad")}</p>`}`}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#main.svelte-1mup0xu{position:relative;z-index:1;display:block;margin:30px auto;width:95%;max-width:1000px;overflow-y:hidden}.loading.svelte-1mup0xu{display:block;position:relative;z-index:1;width:85%;max-width:500px;margin:80px auto}",
  map: null
};
const perPage = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { show, query, page, playersData, transactionsData, leagueTeamManagersData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div id="main" class="svelte-1mup0xu">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        <div class="loading svelte-1mup0xu"><p>Loading league transactions...</p>
            ${validate_component(LinearProgress, "LinearProgress").$$render($$result, { indeterminate: true }, {}, {})}</div>
    `;
    }
    return function([{ transactions, currentTeams, stale }, playersInfo, leagueTeamManagers]) {
      return `
        ${validate_component(TransactionsPage, "TransactionsPage").$$render(
        $$result,
        {
          playersInfo,
          stale,
          transactions,
          currentTeams,
          show,
          query,
          queryPage: page,
          perPage,
          postUpdate: true,
          leagueTeamManagers
        },
        {},
        {}
      )}
    `;
    }(__value);
  }(waitForAll(transactionsData, playersData, leagueTeamManagersData))}</div>`;
});
export {
  Page as default
};
