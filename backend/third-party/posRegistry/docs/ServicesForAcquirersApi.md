# ServicesForAcquirersApi

All URIs are relative to *https://www1.aade.gr/aadeapps3/posApi*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetchErrors**](ServicesForAcquirersApi.md#fetchErrors) | **GET** /rest/common/fetch/errors/{transId} | Fetch errors for specific upload |
| [**fetchRegistryAfm**](ServicesForAcquirersApi.md#fetchRegistryAfm) | **GET** /rest/acquirer/fetch/contract/{tin} | Fetch submitted contracts for specific TIN |
| [**fetchUpload**](ServicesForAcquirersApi.md#fetchUpload) | **GET** /rest/common/fetch/upload/{transId} | Fetch info for specific upload |
| [**fetchUploadedCsv**](ServicesForAcquirersApi.md#fetchUploadedCsv) | **GET** /rest/common/fetch/csv/{transId} | Fetch uploaded file |
| [**fetchUploads**](ServicesForAcquirersApi.md#fetchUploads) | **GET** /rest/common/fetch/uploads | Fetch list of uploaded files |
| [**uploadCsv**](ServicesForAcquirersApi.md#uploadCsv) | **POST** /rest/acquirer/upload/submit | Upload CSV file  |
| [**validateCsv**](ServicesForAcquirersApi.md#validateCsv) | **POST** /rest/acquirer/upload/validate | Validate CSV file  |


<a id="fetchErrors"></a>
# **fetchErrors**
> fetchErrors(tokenUsername, tokenPassword, transId)

Fetch errors for specific upload

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForAcquirersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForAcquirersApi apiInstance = new ServicesForAcquirersApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    Long transId = 56L; // Long | 
    try {
      apiInstance.fetchErrors(tokenUsername, tokenPassword, transId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForAcquirersApi#fetchErrors");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenUsername** | **String**|  | |
| **tokenPassword** | **String**|  | |
| **transId** | **Long**|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

<a id="fetchRegistryAfm"></a>
# **fetchRegistryAfm**
> fetchRegistryAfm(tokenUsername, tokenPassword, tin, mid, tid, iban)

Fetch submitted contracts for specific TIN

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForAcquirersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForAcquirersApi apiInstance = new ServicesForAcquirersApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    String tin = "tin_example"; // String | 
    String mid = "mid_example"; // String | 
    String tid = "tid_example"; // String | 
    String iban = "iban_example"; // String | 
    try {
      apiInstance.fetchRegistryAfm(tokenUsername, tokenPassword, tin, mid, tid, iban);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForAcquirersApi#fetchRegistryAfm");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenUsername** | **String**|  | |
| **tokenPassword** | **String**|  | |
| **tin** | **String**|  | |
| **mid** | **String**|  | [optional] |
| **tid** | **String**|  | [optional] |
| **iban** | **String**|  | [optional] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

<a id="fetchUpload"></a>
# **fetchUpload**
> fetchUpload(tokenUsername, tokenPassword, transId)

Fetch info for specific upload

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForAcquirersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForAcquirersApi apiInstance = new ServicesForAcquirersApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    Long transId = 56L; // Long | 
    try {
      apiInstance.fetchUpload(tokenUsername, tokenPassword, transId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForAcquirersApi#fetchUpload");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenUsername** | **String**|  | |
| **tokenPassword** | **String**|  | |
| **transId** | **Long**|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

<a id="fetchUploadedCsv"></a>
# **fetchUploadedCsv**
> fetchUploadedCsv(tokenUsername, tokenPassword, transId)

Fetch uploaded file

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForAcquirersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForAcquirersApi apiInstance = new ServicesForAcquirersApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    Long transId = 56L; // Long | 
    try {
      apiInstance.fetchUploadedCsv(tokenUsername, tokenPassword, transId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForAcquirersApi#fetchUploadedCsv");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenUsername** | **String**|  | |
| **tokenPassword** | **String**|  | |
| **transId** | **Long**|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

<a id="fetchUploads"></a>
# **fetchUploads**
> fetchUploads(tokenUsername, tokenPassword, dateFrom, dateTo, uploadType)

Fetch list of uploaded files

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForAcquirersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForAcquirersApi apiInstance = new ServicesForAcquirersApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    String dateFrom = "dateFrom_example"; // String | Date must be in DDMMYYYY format
    String dateTo = "dateTo_example"; // String | Date must be in DDMMYYYY format
    String uploadType = "ACQUIRER_POS"; // String | 
    try {
      apiInstance.fetchUploads(tokenUsername, tokenPassword, dateFrom, dateTo, uploadType);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForAcquirersApi#fetchUploads");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenUsername** | **String**|  | |
| **tokenPassword** | **String**|  | |
| **dateFrom** | **String**| Date must be in DDMMYYYY format | [optional] |
| **dateTo** | **String**| Date must be in DDMMYYYY format | [optional] |
| **uploadType** | **String**|  | [optional] [enum: ACQUIRER_POS, NSP_POS] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

<a id="uploadCsv"></a>
# **uploadCsv**
> uploadCsv(tokenUsername, tokenPassword, _file)

Upload CSV file 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForAcquirersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForAcquirersApi apiInstance = new ServicesForAcquirersApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    File _file = new File("/path/to/file"); // File | 
    try {
      apiInstance.uploadCsv(tokenUsername, tokenPassword, _file);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForAcquirersApi#uploadCsv");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenUsername** | **String**|  | |
| **tokenPassword** | **String**|  | |
| **_file** | **File**|  | [optional] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/xml, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

<a id="validateCsv"></a>
# **validateCsv**
> validateCsv(tokenUsername, tokenPassword, _file)

Validate CSV file 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForAcquirersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForAcquirersApi apiInstance = new ServicesForAcquirersApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    File _file = new File("/path/to/file"); // File | 
    try {
      apiInstance.validateCsv(tokenUsername, tokenPassword, _file);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForAcquirersApi#validateCsv");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenUsername** | **String**|  | |
| **tokenPassword** | **String**|  | |
| **_file** | **File**|  | [optional] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/xml, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

