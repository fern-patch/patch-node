# Patch Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/patch)](https://www.npmjs.com/package/@fern-api/patch)

## Documentation

API documentation is available at <https://docs.patch.io/>.

## Usage

```typescript
import { PatchApi } from "@fern-api/patch";

const patch = new PatchApi.Client({
  _origin: "https://api.patch.io/v1/",
  _token: process.env.PATCH_TOKEN
});

const response = await patch.estimates.createFlightEstimate({
  originAirport: "SEA",
  destinationAirport: "SFO",
  aircraftCode: "73G",
  cabinClass: PatchApi.CabinClass.Business,
  passengerCount: 4
});

if (response.ok) {
  console.log("Got an estimate!", response.body);
} else {
  console.error("Failed to create estimate", response.error);
}
```

## Sample app

Check out the [sample app](.sample-app/app.ts) which consumes this SDK!

```bash
export PATCH_TOKEN=...

cd .sample-app
yarn install
yarn start
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-patch/patch-node) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
