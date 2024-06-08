# ServicesForNspsApi

All URIs are relative to *https://www1.aade.gr/aadeapps3/posApi*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetchDisputes**](ServicesForNspsApi.md#fetchDisputes) | **GET** /rest/nsp/fetch/disputes/{period} | Fetch disputes from companies for specific month |
| [**fetchErrors**](ServicesForNspsApi.md#fetchErrors) | **GET** /rest/common/fetch/errors/{transId} | Fetch errors for specific upload |
| [**fetchPriorityAfm**](ServicesForNspsApi.md#fetchPriorityAfm) | **GET** /rest/nsp/fetch/priority/afm | Fetch TINs with POS with update priority |
| [**fetchPriorityPos**](ServicesForNspsApi.md#fetchPriorityPos) | **GET** /rest/nsp/fetch/priority/pos | Fetch POS with update priority |
| [**fetchRegistryAfm1**](ServicesForNspsApi.md#fetchRegistryAfm1) | **GET** /rest/nsp/fetch/pos/{tin} | Fetch submitted POS for specific TIN |
| [**fetchUpload**](ServicesForNspsApi.md#fetchUpload) | **GET** /rest/common/fetch/upload/{transId} | Fetch info for specific upload |
| [**fetchUploadedCsv**](ServicesForNspsApi.md#fetchUploadedCsv) | **GET** /rest/common/fetch/csv/{transId} | Fetch uploaded file |
| [**fetchUploads**](ServicesForNspsApi.md#fetchUploads) | **GET** /rest/common/fetch/uploads | Fetch list of uploaded files |
| [**uploadCsv1**](ServicesForNspsApi.md#uploadCsv1) | **POST** /rest/nsp/upload/submit | Upload CSV file  |
| [**validateCsv1**](ServicesForNspsApi.md#validateCsv1) | **POST** /rest/nsp/upload/validate | Validate CSV file  |


<a id="fetchDisputes"></a>
# **fetchDisputes**
> fetchDisputes(tokenUsername, tokenPassword, period)

Fetch disputes from companies for specific month

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    String period = "period_example"; // String | Period must be in YYYYMM format
    try {
      apiInstance.fetchDisputes(tokenUsername, tokenPassword, period);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#fetchDisputes");
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
| **period** | **String**| Period must be in YYYYMM format | |

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
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    Long transId = 56L; // Long | 
    try {
      apiInstance.fetchErrors(tokenUsername, tokenPassword, transId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#fetchErrors");
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

<a id="fetchPriorityAfm"></a>
# **fetchPriorityAfm**
> fetchPriorityAfm(tokenUsername, tokenPassword)

Fetch TINs with POS with update priority

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    try {
      apiInstance.fetchPriorityAfm(tokenUsername, tokenPassword);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#fetchPriorityAfm");
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

<a id="fetchPriorityPos"></a>
# **fetchPriorityPos**
> fetchPriorityPos(tokenUsername, tokenPassword)

Fetch POS with update priority

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    try {
      apiInstance.fetchPriorityPos(tokenUsername, tokenPassword);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#fetchPriorityPos");
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

<a id="fetchRegistryAfm1"></a>
# **fetchRegistryAfm1**
> fetchRegistryAfm1(tokenUsername, tokenPassword, tin, mid, tid)

Fetch submitted POS for specific TIN

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    String tin = "tin_example"; // String | 
    String mid = "mid_example"; // String | 
    String tid = "tid_example"; // String | 
    try {
      apiInstance.fetchRegistryAfm1(tokenUsername, tokenPassword, tin, mid, tid);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#fetchRegistryAfm1");
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
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    Long transId = 56L; // Long | 
    try {
      apiInstance.fetchUpload(tokenUsername, tokenPassword, transId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#fetchUpload");
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
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    Long transId = 56L; // Long | 
    try {
      apiInstance.fetchUploadedCsv(tokenUsername, tokenPassword, transId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#fetchUploadedCsv");
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
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    String dateFrom = "dateFrom_example"; // String | Date must be in DDMMYYYY format
    String dateTo = "dateTo_example"; // String | Date must be in DDMMYYYY format
    String uploadType = "ACQUIRER_POS"; // String | 
    try {
      apiInstance.fetchUploads(tokenUsername, tokenPassword, dateFrom, dateTo, uploadType);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#fetchUploads");
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

<a id="uploadCsv1"></a>
# **uploadCsv1**
> uploadCsv1(tokenUsername, tokenPassword, _file)

Upload CSV file 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    File _file = new File("/path/to/file"); // File | 
    try {
      apiInstance.uploadCsv1(tokenUsername, tokenPassword, _file);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#uploadCsv1");
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

<a id="validateCsv1"></a>
# **validateCsv1**
> validateCsv1(tokenUsername, tokenPassword, _file)

Validate CSV file 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ServicesForNspsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://www1.aade.gr/aadeapps3/posApi");

    ServicesForNspsApi apiInstance = new ServicesForNspsApi(defaultClient);
    String tokenUsername = "tokenUsername_example"; // String | 
    String tokenPassword = "tokenPassword_example"; // String | 
    File _file = new File("/path/to/file"); // File | 
    try {
      apiInstance.validateCsv1(tokenUsername, tokenPassword, _file);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesForNspsApi#validateCsv1");
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

